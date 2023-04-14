import base64

import cv2
import math
from rest_framework.views import APIView
from rest_framework.response import Response


# 矫正窗口在图片中的位置
# img_wh:图片的宽高, win_wh:窗口的宽高, win_xy:窗口在图片的位置
# def check_location(img_wh, win_wh, win_xy):
#     for i in range(2):
#         if win_xy[i] < 0:
#             win_xy[i] = 0
#         elif win_xy[i] + win_wh[i] > img_wh[i] and img_wh[i] > win_wh[i]:
#             win_xy[i] = img_wh[i] - win_wh[i]
#         elif win_xy[i] + win_wh[i] > img_wh[i] and img_wh[i] < win_wh[i]:
#             win_xy[i] = 0
    # print(img_wh, win_wh, win_xy)


# 计算缩放倍数
# flag：鼠标滚轮上移或下移的标识, step：缩放系数，滚轮每步缩放0.1, zoom：缩放倍数
# def count_zoom(flag, step, zoom):
#     if flag > 0:  # 滚轮上移
#         zoom += step
#         if zoom > 1 + step * 20:  # 最多只能放大到3倍
#             zoom = 1 + step * 20
#     else:  # 滚轮下移
#         zoom -= step
#         if zoom < 5*step:  # 最多只能缩小到0.5倍
#             zoom = 5*step
#     zoom = round(zoom, 2)  # 取2位有效数字
#     return zoom
#

# OpenCV鼠标事件
# def mouse(event, x, y, flags, param):
#     global g_location_click, g_location_release, g_image_show, g_image_zoom, g_location_win, location_win, g_zoom
#     if event == cv2.EVENT_LBUTTONDOWN:  # 左键点击
#         g_location_click = [x, y]  # 左键点击时，鼠标相对于窗口的坐标
#         location_win = [g_location_win[0], g_location_win[1]]  # 窗口相对于图片的坐标，不能写成location_win = g_location_win
#     elif event == cv2.EVENT_MOUSEMOVE and (flags & cv2.EVENT_FLAG_LBUTTON):  # 按住左键拖曳
#         g_location_release = [x, y]  # 左键拖曳时，鼠标相对于窗口的坐标
#         h1, w1 = g_image_zoom.shape[0:2]  # 缩放图片的宽高
#         w2, h2 = g_window_wh  # 窗口的宽高
#         show_wh = [0, 0]  # 实际显示图片的宽高
#         if w1 <= w2 and h1 <= h2:  # 图片的宽高小于窗口宽高，无法移动
#             show_wh = [w1, h1]
#             g_location_win = [0, 0]
#         elif w1 > w2 and h1 <= h2:  # 图片的宽度大于窗口的宽度，可左右移动
#             show_wh = [w2, h1]
#             g_location_win[0] = location_win[0] + g_location_click[0] - g_location_release[0]
#         elif w1 <= w2 and h1 > h2:  # 图片的高度大于窗口的高度，可上下移动
#             show_wh = [w1, h2]
#             g_location_win[1] = location_win[1] + g_location_click[1] - g_location_release[1]
#         else:  # 图片的宽高大于窗口宽高，可左右上下移动
#             show_wh = [w2, h2]
#             g_location_win[0] = location_win[0] + g_location_click[0] - g_location_release[0]
#             g_location_win[1] = location_win[1] + g_location_click[1] - g_location_release[1]
#         check_location([w1, h1], [w2, h2], g_location_win)  # 矫正窗口在图片中的位置
#         g_image_show = g_image_zoom[g_location_win[1]:g_location_win[1] + show_wh[1],
#                        g_location_win[0]:g_location_win[0] + show_wh[0]]  # 实际显示的图片
#     elif event == cv2.EVENT_MOUSEWHEEL:  # 滚轮
#         z = g_zoom  # 缩放前的缩放倍数，用于计算缩放后窗口在图片中的位置
#         g_zoom = count_zoom(flags, g_step, g_zoom)  # 计算缩放倍数
#         w1, h1 = [int(g_image_original.shape[1] * g_zoom), int(g_image_original.shape[0] * g_zoom)]  # 缩放图片的宽高
#         w2, h2 = g_window_wh  # 窗口的宽高
#         g_image_zoom = cv2.resize(g_image_original, (w1, h1), interpolation=cv2.INTER_AREA)  # 图片缩放
#         show_wh = [0, 0]  # 实际显示图片的宽高
#         if w1 < w2 and h1 < h2:  # 缩放后，图片宽高小于窗口宽高
#             show_wh = [w1, h1]
#             cv2.resizeWindow(g_window_name, w1, h1)
#         elif w1 >= w2 and h1 < h2:  # 缩放后，图片高度小于窗口高度
#             show_wh = [w2, h1]
#             cv2.resizeWindow(g_window_name, w2, h1)
#         elif w1 < w2 and h1 >= h2:  # 缩放后，图片宽度小于窗口宽度
#             show_wh = [w1, h2]
#             cv2.resizeWindow(g_window_name, w1, h2)
#         else:  # 缩放后，图片宽高大于窗口宽高
#             show_wh = [w2, h2]
#             cv2.resizeWindow(g_window_name, w2, h2)
#         g_location_win = [int((g_location_win[0] + x) * g_zoom / z - x),
#                           int((g_location_win[1] + y) * g_zoom / z - y)]  # 缩放后，窗口在图片的位置
#         check_location([w1, h1], [w2, h2], g_location_win)  # 矫正窗口在图片中的位置
#         # print(g_location_win, show_wh)
#         g_image_show = g_image_zoom[g_location_win[1]:g_location_win[1] + show_wh[1],
#                        g_location_win[0]:g_location_win[0] + show_wh[0]]  # 实际的显示图片
#     cv2.imshow(g_window_name, g_image_show)
#

#下标为i和j的点的距离
def distance(i,j,map):
    x1,y1,x2,y2=map[i][0],map[i][1],map[j][0],map[j][1]
    return math.sqrt((x2-x1)**2+(y2-y1)**2)

#下标为start和end的固定点的最短路算法,返回值为最短路路径长度(单位为像素)
def Dijkstra_point_to_point(start,end,map,image0):
    n=len(map)
    dist=[10000000 for i in range(n)]
    visited=[0 for i in range(n)]
    path=[-2 for i in range(n)]
    dist[start],visited[start],path[start]=0,1,-1
    for i in range(2,len(map[start])):
        tmp=map[start][i]
        dist[tmp]=distance(start,tmp,map)
        path[tmp]=start
    min_dist = 10000000
    mindist_index = 0
    for i in range(n):
        if visited[i] == 0 and dist[i] < min_dist:
            min_dist = dist[i]
            mindist_index = i
    j=mindist_index
    while j!=end:
        visited[j] = 1
        for i in range(2,len(map[j])):
            tmp=map[j][i]
            if visited[tmp]==0 and dist[tmp]>dist[j]+distance(j,tmp,map):
                dist[tmp]=dist[j]+distance(j,tmp,map)
                path[tmp]=j
        min_dist=10000000
        mindist_index=0
        for i in range(n):
            if visited[i]==0 and dist[i]<min_dist:
                min_dist=dist[i]
                mindist_index=i
        if min_dist==10000000:
            print("not connected graph")
            break
        j=mindist_index
    else:
        return print_route(end,map,path,image0)
    return -1

#绘制最短路,返回值为最短路长度(单位为像素)
def print_route(end,map,path,image0):
    dist_sum=0
    ptr=end
    while path[ptr]!=-1:
        start=path[ptr]
        dist_sum+=distance(ptr,start,map)
        cv2.line(image0,(map[ptr][0],map[ptr][1]),(map[start][0],map[start][1]),(0,0,0),2)
        ptr=start
    return dist_sum

#处理txt文件并读入到二维数组a中
def read_map(n):
    file=open("C:/Users/ASUS/Desktop/project/big_project/map.txt","r")
    a=[]
    for i in range(n):
        line = file.readline()
        lst=line.split()
        tmp=[]
        for j in range(1,len(lst)):
            tmp.append(int(lst[j]))
        a.append(tmp)
    file.close()
    return a

#主函数
def main(end,a,image0):
    route_length=Dijkstra_point_to_point(0,end,a,image0)
    return route_length

d={'西区东门':1,
   '三教A':101,
   '三教B':105,
   '三教C':39,
   '西区操场':112}

class MapView(APIView):
    def __init__(self):
        super().__init__()
        self.n = 126
        self.a=read_map(self.n)
    def post(self,request,*args,**kwargs):
        #传路径长度
        #传起点坐标x和y
        tmp_a0 = [100, 100]
        self.a[0] = tmp_a0
        in_buildings = 0
        if in_buildings == 0:
            for i in range(1, self.n):
                if distance(0, i, self.a) <= 100:
                    tmp_a0.append(i)
        self.a[0] = tmp_a0
        destination=request.data['destination']
        #print(destination)
        end=d[destination]
        image0 = cv2.imread('C:/Users/ASUS/Desktop/project/big_project/map.jpg')
        main(end, self.a,image0)
        img1 = cv2.imencode('.jpg', image0)[1]
        back_2 = base64.b64encode(img1)
        return Response(back_2)