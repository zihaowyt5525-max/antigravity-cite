from html.parser import HTMLParser
import re

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
    def handle_starttag(self, tag, attrs):
        for attr in attrs:
            if attr[0] == 'id':
                self.ids.add(attr[1])

parser = MyHTMLParser()
with open('index.html', 'r', encoding='utf-8') as f:
    parser.feed(f.read())

with open('engine.js', 'r', encoding='utf-8') as f:
    js = f.read()

used_ids = re.findall(r"document\.getElementById\(['\"]([^'\"]+)['\"]\)", js)
missing = [uid for uid in used_ids if uid not in parser.ids]
print("Missing IDs:", set(missing))
