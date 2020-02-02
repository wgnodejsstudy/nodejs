import requests

API_HOST = "http://api.pathofexile.com/public-stash-tabs/?id=:id"
API_ID = ""
data = requests.get(API_HOST).json()
print(data)