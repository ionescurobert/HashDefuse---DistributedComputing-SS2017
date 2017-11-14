###################################
# Author: Robert Ionescu
# Version: 0.1
###################################

def search(hash):
    with open("md5.txt") as file:
        print("Searching in rainbow table...")
        for line in file:
            if hash in line:
                result = line.split(";")
                return result[-1]
        return 1


def main(hash_value):
    result = search(hash_value)

    if result == 1:
        return 1
    else:
        return result


if __name__ == '__main__':
    main(hash_value=False)
