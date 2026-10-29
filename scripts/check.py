"""Validate static pages, local assets, anchors, metadata, and homepage structure."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

ROOT = Path(__file__).resolve().parents[1]


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.links, self.h1, self.meta = path, set(), [], 0, set()
        self.sections, self.images, self.media = 0, [], []
        self.text, self.metadata = [], {}
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'Duplicate ID in {self.path}'
            self.ids.add(attrs['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'section':
            self.sections += 1
        if tag == 'meta':
            key = attrs.get('name') or attrs.get('property')
            self.meta.add(key)
            self.metadata[key] = attrs.get('content', '')
        for name in ('src', 'href'):
            if attrs.get(name):
                self.links.append(attrs[name])
        if 'data-service-media' in attrs:
            self.media.append(attrs['data-service-media'])
        if tag == 'img':
            assert 'alt' in attrs, f'Missing image alt in {self.path}'
            self.images.append(attrs)

    def handle_data(self, data):
        self.text.append(data)


docs = {f: Document(f) for f in ROOT.glob('*.html')}
missing, count = set(), 0
for path, doc in docs.items():
    assert doc.h1 == 1, f'Expected one H1 in {path}'
    assert {'description', 'viewport', 'og:title', 'og:description', 'og:image', 'og:url'} <= doc.meta
    for link in doc.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        assert not url.path.startswith('/'), f'Root-relative URL breaks project deployment: {link}'
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        assert target.is_relative_to(ROOT), f'Link escapes site: {link}'
        if not target.is_file():
            missing.add(str(target.relative_to(ROOT)))
        if url.fragment:
            assert target in docs and url.fragment in docs[target].ids, f'Missing anchor: {link}'
        count += 1

home = docs[ROOT / 'index.html']
assert home.sections == 2, 'Homepage must have exactly two sections: hero and services'
assert 'experience' not in home.ids, 'Experience must be integrated into the hero'
for service, detail, filename in [
    ('build', 'founder-build-sprint.html', 'hector-building.jpg'),
    ('advisory', 'technical-advisory.html', 'hector-advisory.jpg'),
]:
    for doc in [home, docs[ROOT / detail]]:
        assert doc.media.count(service) == 1, f'Missing photo slot for {service} in {doc.path}'
        images = [image for image in doc.images if image.get('data-service-image') == service]
        assert len(images) == 1 and images[0]['src'] == f'assets/{filename}', f'Incorrect static photo for {service} in {doc.path}'
        assert 'AI-generated illustrative scene' in images[0]['alt'], 'Missing accurate scene alt text'
# Prices and advisor-hour limits must agree across visible copy and social/SEO metadata.
for filename, price, hours in [
    ('founder-build-sprint.html', '$2,500', '8 advisor hours'),
    ('technical-advisory.html', '$2,000', '4 advisor hours'),
]:
    doc = docs[ROOT / filename]
    visible = ' '.join(doc.text)
    assert price in visible and hours in visible, f'Wrong visible offer in {filename}'
    for key in ('description', 'og:description'):
        assert price in doc.metadata[key] and hours in doc.metadata[key], f'Wrong offer metadata in {filename}'
for path in docs:
    source = path.read_text()
    assert not any(old in source for old in ('$3,000', '3 advisor hours', 'three advisor hours')), f'Stale pricing/scope in {path}'
home_text = ' '.join(' '.join(home.text).split())
assert 'From $2,000' in home_text and 'From $2,000' in ' '.join(docs[ROOT / 'technical-advisory.html'].text), 'Advisory must use starting-at pricing'
assert all(value in home_text for value in ('$2,500', '$2,000', '8 advisor hours', '4 advisor hours')), 'Homepage offer mismatch'
assert 'direct-message access' in home_text.lower(), 'Homepage missing direct-message access'
advisory = docs[ROOT / 'technical-advisory.html']
assert 'direct-message access' in ' '.join(advisory.text).lower(), 'Detail page missing direct-message access'
for key in ('description', 'og:description'):
    assert 'from $2,000' in advisory.metadata[key].lower(), 'Metadata missing starting-at pricing'
    assert 'direct-message access' in advisory.metadata[key], 'Metadata missing direct-message access'
# A missing configured image is a deployment error; an unconfigured optional image is not requested.
config = (ROOT / 'assets/config.js').read_text()
for field in ('portraitUrl', 'buildImageUrl', 'advisoryImageUrl'):
    value = re.search(r'\b' + field + r': "([^"]*)"', config).group(1)
    if value:
        target = (ROOT / unquote(urlsplit(value).path)).resolve()
        assert target.is_relative_to(ROOT), f'Configured image escapes site: {value}'
        if not target.is_file():
            missing.add(value)
print(f'PASS: {len(docs)} page structures, {count} relative links, metadata, anchors, two homepage sections, and distinct static service photos')
if missing:
    print('FAIL: referenced files missing:')
    for filename in sorted(missing):
        print(f'  {filename}')
    raise SystemExit(1)
print('PASS: all rendered and configured assets exist; no broken image references')
