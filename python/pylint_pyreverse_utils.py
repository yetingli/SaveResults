import pylint.pyreverse.utils
import time

for i in range(0, 50):
    ATTACK = "__" + "1" * i * 100 + "!"
    t = time.time()
    visibility = pylint.pyreverse.utils.get_visibility(ATTACK)
    print(visibility)
    print(str(time.time() - t))
