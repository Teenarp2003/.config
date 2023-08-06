import matplotlib.pyplot as plt
import numpy as np
class DataPlot:
    def Plot1():
        x_axis=np.array([10,16,37,85,12,15,86,70,69,41,81,55,23])
        y_axis=np.array([54,87,43,79,21,66,50,84,58,49,37,29,20])
        z_axis=np.array([33,72,22,20,13,79,54,68,53,72,79,81,73])
        #f=plt.figure()
        #f.set_figwidth(10)
        #f.set_figheight(4)
        plt.plot(x_axis,linestyle='dotted',marker="o",mfc="blue")
        plt.plot(y_axis,linestyle='dashed',marker="o",mfc="red")
        plt.plot(z_axis,linestyle='dashdot',marker="o",mfc="green")
        plt.show()
    def Plot2():
        x_axis=np.array([48,63,82,79,71,10,27,53,39,42,45,27,86])
        y_axis=np.array([71,61,47,18,82,24,79,78,77,68,80,57,52])
        x_axis_A=np.array([10,16,37,85,12,15,86,70,69,80,47,54,72])
        y_axis_B=np.array([36,31,38,72,75,69,63,55,59,28,84,86,29])
        colors=np.array([10,20,30,40,50,60,70,80,90,100,110,120,130])
        plt.scatter(x_axis,y_axis,c=colors,cmap='viridis')
        plt.scatter(x_axis_A,y_axis_B,c=colors,cmap='viridis')
        plt.colorbar()
        plt.show()
    def Plot3():
        x_axis=np.array(['A','B','C','D','E','F','G','H','I','J'])
        y_axis=np.array([48,81,78,69,21,78,20,19,64,83])
        plt.bar(x_axis,y_axis,color="purple",width=0.5)
        plt.show()
        plt.barh(x_axis,y_axis,color="green")
        plt.grid(color="red")
        plt.show()
    def Plot4():
        students=np.array([20,20,25,30,50,9,75,80])
        explode=np.array([0.2,0.2,0,0,0,0,0,0])
        labels=np.array(["Praneet","Paromita","1","2","3","4","4","5"])
        plt.pie(students,labels=labels,shadow=True,explode=explode)
        plt.legend(title="Annual Result")
        plt.show()
DataPlot.Plot1()
DataPlot.Plot2()
DataPlot.Plot4()
        
        