import os
import cv2
import matplotlib.pylab as plt
from skimage.morphology import skeletonize
import numpy as np
# Callback function for mouse events
img_name = 'maze2.jpg'
def mouse_callback(event, x, y, flags, param):
    global point1, point2, selecting

    if event == cv2.EVENT_LBUTTONDOWN:
        if not selecting:
            point1 = (x, y)
            selecting = True
        else:
            point2 = (x, y)
            selecting = False

            cv2.rectangle(image_copy, point1, point2, (0, 255, 0), 2)
            cv2.imshow('Select Points', image_copy)

# Read the image
image = cv2.imread(img_name)
image_copy = image.copy()

point1 = (-1, -1)
point2 = (-1, -1)
selecting = False

cv2.namedWindow('Select Points')
cv2.setMouseCallback('Select Points', mouse_callback)

while True:
    cv2.imshow('Select Points', image_copy)
    key = cv2.waitKey(1) & 0xFF

    if key == 27:  # Press 'Esc' key to exit
        break
    elif point1 != (-1, -1) and point2 != (-1, -1):
        break

cv2.destroyAllWindows()

if point1 != (-1, -1) and point2 != (-1, -1):
    x0,y0 = point1
    x1,y1 = point2
rgb_img = plt.imread(img_name)
print(rgb_img.shape)

plt.figure(figsize=(14,14))
plt.imshow(rgb_img)
#set the starting and ending points.
plt.plot(x0,y0, 'gx',markersize = 14)
plt.plot(x1,y1, 'rx',markersize = 14)
#this code block first thresholds the image to only one channel.{since jpg has 3 channels} and 
# so now there is only 2 channels. high and low. 
# then it skeletonizes the image to form the possible paths
#finally it inverts it 

if rgb_img.shape.__len__()>2:
    thr_img = rgb_img[:,:,0]>np.max(rgb_img[:,:,0])/2
else:
    thr_img = rgb_img > np.max(rgb_img)/2
skeleton = skeletonize(thr_img)
mapT=~skeleton
plt.figure(figsize=(14,14))
plt.imshow(mapT)
plt.plot(x0,y0, 'gx',markersize = 14)
plt.plot(x1,y1, 'rx',markersize = 14)
#show the start and end points

# Breadth First Search Algorithm
print("Calculating Route...")
_mapt = np.copy(mapT)
# set out search radius
boxr = 30
if y1 < boxr: y1 = boxr
if x1 < boxr: x1 = boxr

cpys, cpxs = np.where(_mapt[y1-boxr:y1+boxr, x1-boxr:x1+boxr] == 0) 
# sets the points in a square search radius to 0.
#Calibrate points to main scale
cpxs += x1-boxr
cpys += y1-boxr
#find the closest point of possible path and end points
idx = np.argmin(np.sqrt((cpys-y1)**2 + (cpys-x1)**2))
y, x = cpys[idx], cpxs[idx]

pts_x = [x]
pts_y = [y]
pts_c = [0]

#mesh of displacements
xmesh, ymesh = np.meshgrid(np.arange(-1,2),np.arange(-1,2))
ymesh = ymesh.reshape(-1)
xmesh = xmesh.reshape(-1)

dst = np.zeros((thr_img.shape))

#Breadth first algorithm exploring a tree
while(1):
    #update distance.
    idc = np.argmin(pts_c)
    ct = pts_c.pop(idc)
    x = pts_x.pop(idc)
    y = pts_y.pop(idc)
    #search the 3x3 neighbourhood for possible 
    ys,xs = np.where(_mapt[y-1:y+2,x-1:x+2]==0)
    #invalidate these points from future searches
    _mapt[ys+y-1, xs+x-1] = ct
    _mapt[y,x] = 999999
    #set the distance in the distance image
    dst[ys+y-1,xs+x-1] = ct+1
    #extend our lists.
    pts_x.extend(xs+x-1)
    pts_y.extend(ys+y-1)
    pts_c.extend([ct+1]*xs.shape[0])
    #if we run of points.
    if pts_x == []:
        break
    if np.sqrt((x-x0)**2 + (y-y0)**2) < boxr:
        edx = x
        edy = y
        break
plt.figure(figsize=[14,14])
plt.imshow(dst)

path_x = []
path_y = []
#tracing best path
while(1):
    nbh = dst[y-1:y+2,x-1:x+2]
    nbh[1,1] = 9999999
    nbh[nbh == 0] = 9999999
    #if deadended
    if np.min(nbh) == 9999999:
        break
    idx = np.argmin(nbh)
    #finding direction
    y += ymesh[idx]
    x +=xmesh[idx]
    if np.sqrt((x-x1)**2 + (y-y1)**2) < boxr:
        print("Optimum route found")
        break
    path_y.append(y)
    path_x.append(x)
#Final display
plt.figure(figsize=(20,20))
plt.imshow(rgb_img)
plt.plot(path_x,path_y, 'r-',linewidth=5)
out = "out.jpg"
plt.savefig(out)
print("Route saved in: ",out)
