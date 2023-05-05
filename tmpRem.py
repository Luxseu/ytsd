import os, time

path = r"C:\\Users\\ufeed\\OneDrive\\Desktop\\ws\\public\\tmp"
print("Active")

while True:
    time.sleep(120)
    
    now = time.time()

    for f in os.listdir(path):
        d = f
        f = os.path.join(path, f)
        if os.stat(f).st_mtime < now - 300:
            if os.path.isfile(f):
                os.remove(f)
                print("  Removed file: " + d)
        