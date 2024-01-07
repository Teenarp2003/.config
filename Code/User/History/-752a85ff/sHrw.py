import cv2
import matplotlib.pylab as plt
from skimage.morphology import skeletonize
import numpy as np

#img_name=input("Select the image: ")
img_name = 'maze2.jpg'
rgb_img = plt.imread(img_name)
print(rgb_img.shape)

plt.figure(figsize=(14,14))
plt.imshow(rgb_img)
#set the starting and ending points.
x0,y0 = 690, 10
x1,y1 = 3150,1400

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
plt.figure(figsize=(14,14))
plt.imshow(rgb_img)
plt.plot(path_x,path_y, 'r-',linewidth=5)
plt.savefig("out.jpg")
