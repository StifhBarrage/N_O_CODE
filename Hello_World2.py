print("Push test")
n = int(input("Enter a number between 0 and 9: "))
list01 = []

while n >= 0 and n <= 9:
    list01.append(n)
    New_List = sorted(list01)
    n = int(input("Enter another number between 0 and 9, or any other number to stop: "))

print("This is your final list: ", New_List)

