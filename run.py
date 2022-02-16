import requests

url = "http://localhost:3000/devices"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)