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
            self.meta.add(attrs.get('name') or attrs.get('property'))
        for name in ('src', 'href'):
            if attrs.get(name):
                self.links.append(attrs[name])
        if 'data-service-media' in attrs:
            assert 'hidden' in attrs, 'Optional image slot must not reserve space before loading'
            self.media.append(attrs['data-service-media'])
        if tag == 'img':
            assert 'alt' in attrs, f'Missing image alt in {self.path}'
            self.images.append(attrs)


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
assert home.sections == 2, 'Homepage must have exactly two primary sections'
for service, detail in [
    ('build', 'founder-build-sprint.html'),
    ('advisory', 'technical-advisory.html'),
]:
    for doc in [home, docs[ROOT / detail]]:
        assert doc.media.count(service) == 1, f'Missing optional photo slot for {service} in {doc.path}'
# A missing configured image is a deployment error; an unconfigured optional image is not requested.
config = (ROOT / 'assets/config.js').read_text()
for field in ('portraitUrl', 'buildImageUrl', 'advisoryImageUrl'):
    value = re.search(r'\b' + field + r': "([^"]*)"', config).group(1)
    if value:
        target = (ROOT / unquote(urlsplit(value).path)).resolve()
        assert target.is_relative_to(ROOT), f'Configured image escapes site: {value}'
        if not target.is_file():
            missing.add(value)
print(f'PASS: {len(docs)} page structures, {count} relative links, metadata, anchors, two homepage sections, and optional photo slots')
if missing:
    print('FAIL: referenced files missing:')
    for filename in sorted(missing):
        print(f'  {filename}')
    raise SystemExit(1)
print('PASS: all rendered and configured assets exist; no broken image references')
