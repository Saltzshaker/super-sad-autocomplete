import urllib.request
import json

url2 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=why%20cant%20i'
url3 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=why%20can%27t%20i'
url4 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=why%20do%20i'
url5 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=can%20i%20be'
url6 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=did%20i%20really'
url7 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=diet%20if'
url8 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=emotional%20abuse%20is'
url9 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=eating%20is'
url10 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=eating%20my'
url11 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=failure'
url12 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=failing%20my'
url13 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=fake%20my'
url14 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=going%20alone'
url15 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=hate%20my'
url16 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=heartbreak%20that'
url17 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=heartbroken%20and'
url18 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=hating%20your'
#url19 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=jealous%20of%20my friend'
url20 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=jealous%20of%20my'
url21 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=jobs%20for%20fail'
url22 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=killing%20yourself with'
url23 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=killing%20your'
url24 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=lying%20in%20bed'
url25 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=lying%20to'
url25 = 'http://suggestqueries.google.com/complete/search?client=firefox&q=lying%20to'


def response(url2):
    with urllib.request.urlopen(url2) as response:
        return response.read()

res = response(url2)
print(json.loads(res))

def response(url3):
    with urllib.request.urlopen(url3) as response:
        return response.read()

res = response(url3)
print(json.loads(res))

def response(url4):
    with urllib.request.urlopen(url4) as response:
        return response.read()

res = response(url4)
print(json.loads(res))

def response(url5):
    with urllib.request.urlopen(url5) as response:
        return response.read()

res = response(url5)
print(json.loads(res))

def response(url6):
    with urllib.request.urlopen(url6) as response:
        return response.read()

res = response(url6)
print(json.loads(res))


def response(url7):
    with urllib.request.urlopen(url7) as response:
        return response.read()

res = response(url7)
print(json.loads(res))



def response(url8):
    with urllib.request.urlopen(url8) as response:
        return response.read()

res = response(url8)
print(json.loads(res))



def response(url9):
    with urllib.request.urlopen(url9) as response:
        return response.read()

res = response(url9)
print(json.loads(res))



def response(url10):
    with urllib.request.urlopen(url10) as response:
        return response.read()

res = response(url10)
print(json.loads(res))


def response(url11):
    with urllib.request.urlopen(url11) as response:
        return response.read()

res = response(url11)
print(json.loads(res))


def response(url12):
    with urllib.request.urlopen(url12) as response:
        return response.read()

res = response(url12)
print(json.loads(res))



def response(url13):
    with urllib.request.urlopen(url13) as response:
        return response.read()

res = response(url13)
print(json.loads(res))



def response(url14):
    with urllib.request.urlopen(url14) as response:
        return response.read()

res = response(url14)
print(json.loads(res))


def response(url15):
    with urllib.request.urlopen(url15) as response:
        return response.read()

res = response(url15)
print(json.loads(res))


def response(url16):
    with urllib.request.urlopen(url16) as response:
        return response.read()

res = response(url16)
print(json.loads(res))


def response(url17):
    with urllib.request.urlopen(url17) as response:
        return response.read()

res = response(url17)
print(json.loads(res))


def response(url18):
    with urllib.request.urlopen(url18) as response:
        return response.read()

res = response(url18)
print(json.loads(res))

#
#def response(url19):
#    with urllib.request.urlopen(url19) as response:
#        return response.read()
#
#res = response(url19)
#print(json.loads(res))


def response(url20):
    with urllib.request.urlopen(url20) as response:
        return response.read()

res = response(url20)
print(json.loads(res))


def response(url21):
    with urllib.request.urlopen(url21) as response:
        return response.read()

res = response(url21)
print(json.loads(res))


#def response(url22):
#    with urllib.request.urlopen(url22) as response:
#        return response.read()
#
#res = response(url22)
#print(json.loads(res))


def response(url23):
    with urllib.request.urlopen(url23) as response:
        return response.read()

res = response(url23)
print(json.loads(res))


def response(url24):
    with urllib.request.urlopen(url24) as response:
        return response.read()

res = response(url24)
print(json.loads(res))


def response(url25):
    with urllib.request.urlopen(url25) as response:
        return response.read()

res = response(url25)
print(json.loads(res))


