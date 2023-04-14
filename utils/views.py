from rest_framework.views import APIView
from rest_framework.response import Response

import re

def fuzzyfinder(user_input, collection):
    if user_input=="":
        return []
    suggestions = []
    alt=[]
    e=max(5,len(user_input))
    flag=1
    for i in range(0,e):
        pattern = '.*'.join(user_input[0:i]) # Converts ‘djm‘ to ‘d.*j.*m‘
        if i==0:
            pattern='.*'+user_input[0]+'.*'
        regex = re.compile(pattern)     # Compiles a regex.
        for item in collection:
            match = regex.search(item)  # Checks if the current item matches the regex.
            if match and item in alt:
                flag=0
            if match and flag:
                suggestions.append((len(match.group()), match.start(), item))
                alt.append(item)
                flag=1
    return [x for _,_, x in sorted(suggestions)]

collection=['西区东门','食堂','西区操场','北门','东门','三教A','三教B','三教C']
class loginView(APIView):
    def post(self,request,*args,**kwargs):
        print(request.data['inputValue'])
        print(fuzzyfinder(request.data['inputValue'],collection))
        return Response(fuzzyfinder(request.data['inputValue'],collection))