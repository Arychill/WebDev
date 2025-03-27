a = int(input())
b = int(input())  
c = int(input()) 
d = int(input())  

result = [num for num in range(a, b + 1) if num % d == c]

if result:
    print(*result)