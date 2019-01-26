import urllib.request
import json

url = 'http://suggestqueries.google.com/complete/search?client=firefox&q=test'

# 1. make array of urls
urls = ['http://suggestqueries.google.com/complete/search?client=firefox&q=test','http://suggestqueries.google.com/complete/search?client=firefox&q=why',,'http://suggestqueries.google.com/complete/search?client=firefox&q=can']

#for i in (len(urls[i]):


# go to each url in the list and return response


def response(url):
    with urllib.request.urlopen(url) as response:
        return response.read()

res = response(url)
print(json.loads(res))