N = int(input().strip()) 
count_zeros = sum(1 for _ in range(N) if int(input().strip()) == 0)  
print(count_zeros)  