from requests import put, get

response = put('http://localhost:5000/todo1', data={'data': 'Remember the milk'}).json()
print(response)

response = get('http://localhost:5000/todo1').json()
print(response)

response = put('http://localhost:5000/todo2', data={'data': 'Change my brakepads'}).json()
print(response)

response = get('http://localhost:5000/todo2').json()
print(response)

response = get('http://localhost:5000/all').json()
for resp in response:
    print(resp)

response = get('http://localhost:5000/purge').json()
print(response)

response = get('http://localhost:5000/all').json()
print(response)
