import numpy as np
import cv2
import sys

n=0
lst=[]
def click_event(event, x, y, flags, param):
    global n,lst
    if event == cv2.EVENT_LBUTTONDOWN:
        n+=1
        font = cv2.FONT_HERSHEY_SIMPLEX
        strXY = str(n)
        lst+=[n,x,y]
        cv2.putText(img, strXY,(x,y), font, 0.5,(255,255,0),2)
        cv2.imshow('image', img)
    #if event == cv2.EVENT_MOUSEMOVE and (flags & cv2.EVENT_FLAG_LBUTTON):
        #blue = img[y, x, 0]
        #green = img[y, x, 1]
        #red = img[y, x, 2]
        #print(str(blue),str(green),str(red))
        #img[y,x,0]=155
        #img[y,x,1]=187
        #img[y,x,2]=158
        #font = cv2.FONT_HERSHEY_SIMPLEX
        #strBGR = str(blue) + ', '+ str(green)+ ', '+ str(red)
        #cv2.namedWindow('image',0)
        #cv2.putText(img, strBGR, (x ,y), font, 2, (0,255,255), 3)
        #cv2.imshow('image',img)
        cv2.imwrite('C:/Users/ASUS/Desktop/project/big_project/map2.jpg',img)
#img = np.zeros((512,512,3),np.uint8)
cv2.namedWindow('image',0)
cv2.resizeWindow('image', 2401, 1294)
cv2.moveWindow('image',0,0)
img = cv2.imread('C:/Users/ASUS/Desktop/project/big_project/map2.jpg')
cv2.imshow('image',img)
file=open("C:/Users/ASUS/Desktop/project/big_project/map.txt","w")
cv2.setMouseCallback('image',click_event)
cv2.waitKey(0)
cv2.destroyAllWindows()
for i in range(len(lst)):
    file.write(str(lst[i]))
    if i%3==2:
        file.write("\n")
    else:
        file.write(" ")
file.close()