arr=[1,2,3,4]

from functools import reduce
e=lambda i,j:i+j
print(reduce(e,arr))
