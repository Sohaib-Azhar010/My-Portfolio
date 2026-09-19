from PIL import Image
import os

img_path = '/Users/apple/.gemini/antigravity-ide/brain/4d818429-b816-4a40-b081-b5cf05fe0f01/avatar_transparent_1789831332378.jpg'
if not os.path.exists(img_path):
    print("Image not found")
    exit(1)

img = Image.open(img_path)
img = img.convert("RGBA")
datas = img.getdata()

new_data = []
for item in datas:
    # Green screen removal (heuristic)
    # The background is very bright green
    r, g, b, a = item
    if g > 150 and r < 100 and b < 100:
        new_data.append((255, 255, 255, 0)) # transparent
    elif g > 120 and r < 80 and b < 80:
        # edge cases
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('src/assets/avatar_cartoon.png', "PNG")
print("Saved to src/assets/avatar_cartoon.png")
