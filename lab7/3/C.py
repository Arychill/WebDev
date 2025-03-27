import math

a = int(input())  
b = int(input()) 

start = math.ceil(math.sqrt(a))


result = [i**2 for i in range(start, math.isqrt(b) + 1)]

if result:
    print(*result)