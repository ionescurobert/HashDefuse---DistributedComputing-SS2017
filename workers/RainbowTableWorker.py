import time


def search(hash):
    with open("md5.txt") as file:
        print("Searching in rainbow table...")
        for line in file:
            print("Searching for " + hash)
            time.sleep(1)
            if hash in line:
                return True


def main(hash_value):
    if search(hash_value) is True:
        print("yep")
    else:
        print("nope")


if __name__ == '__main__':
    main(hash_value=False)
