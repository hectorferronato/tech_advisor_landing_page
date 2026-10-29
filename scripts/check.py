"""Check static pages, project-relative assets, fragments, and metadata; no dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.links, self.h1, self.meta = path, set(), [], 0, set()
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'Duplicate ID in {self.path}'
            self.ids.add(attrs['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'meta': self.meta.add(attrs.get('name') or attrs.get('property'))
        for name in ('src', 'href'):
            if attrs.get(name): self.links.append(attrs[name])
        if tag == 'img': assert 'alt' in attrs, f'Missing image alt in {self.path}'

docs = {f: Document(f) for f in ROOT.glob('*.html')}
count = 0
for path, doc in docs.items():
    assert doc.h1 == 1, f'Expected one H1 in {path}'
    assert {'description', 'viewport', 'og:title', 'og:description', 'og:image', 'og:url'} <= doc.meta
    for link in doc.links:
        url = urlsplit(link)
        if url.scheme or url.netloc: continue
        assert not url.path.startswith('/'), f'Root-relative URL breaks project deployment: {link}'
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        assert target.is_relative_to(ROOT), f'Link escapes site: {link}'
        assert target.is_file(), f'Missing target: {link}'
        if url.fragment: assert url.fragment in docs[target].ids, f'Missing anchor: {link}'
        count += 1
print(f'PASS: {len(docs)} pages, {count} local links/assets, heading, metadata and image-alt checks')
