import requests

API_HOST = "http://api.pathofexile.com/public-stash-tabs"
data = requests.get(API_HOST).json()
print(data)