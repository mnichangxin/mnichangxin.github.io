---
layout: post
title: "圣杯布局和双飞翼布局"
categories: CSS
---

* content
{:toc}

## 前言
话说双飞翼布局始于淘宝UED，就找来资料研究了一番，其实原理很简单。圣杯布局的来历是A list part上的一篇[文章](http://alistapart.com/article/holygrail)，另外双飞翼布局是对圣杯布局的一个改进吧。

---

## 圣杯布局

实现的目的就是让左右两栏固定，中间一栏自适应。

先写出表现层代码：

    <div class="page">
        <div class="head">页头</div>
        <div class="layout">
            <div class="main">我是主列</div>
            <div class="sub">我是子列</div>
            <div class="extra">我是附加列</div>
        </div>
        <div class="foot">页脚</div>
    </div>

结构层代码如下：

    .head,.foot {
        min-height: 50px;
        line-height: 50px;
        background: #5E5E5E;
        text-align: center;            
    }
    .main {
        float: left;
        width: 100%;
        min-height: 50px;
        background:#ED1C24;
    }
    .sub {
        float: left;
        width: 150px;
        min-height: 50px;
        margin-left: -100%;
        background: #3F48CC;
    }
    .extra {
        float: left;
        width: 150px;
        min-height: 50px;
        margin-left: -150px;
        background: #22B14C;
    }

解释一下：

>三列都左浮动，main的width=100%自适应宽度，如果不为sub和extra设置负外边距，它们
>将会被挤到下一行。于是为sub设置一个-100%的负边距，使sub列在main列的左侧，同理e
>xtra列给它一个负外边距。

效果如下：

![](http://7xr2ek.com1.z0.glb.clouddn.com/blog%2Fimage%2Fflylayout1.png)

但是可以看到，sub列和extra列遮挡住了main列，于是考虑改进代码：

    .layout{
        padding: 0 150px 0 150px;
        overflow: hidden;
    }


给整个包含框设置左右内边距，使main列收缩，效果如下：

![](http://7xr2ek.com1.z0.glb.clouddn.com/blog%2Fimage%2Fflylayout2.png)

这里又出现一个问题，sub列和extra列紧跟着收缩了，于是继续改进:

    .sub {
        float: left;
        width: 150px;
        min-height: 50px;
        margin-left: -100%;
        background: #3F48CC;
        position: relative;
        left: -150px;
    }
    .extra {
        float: left;
        width: 150px;
        min-height: 50px;
        margin-left: -150px;
        background: #22B14C;
        position: relative;
        right: -150px;
    }

给sub列和extra列增加一个相对定位，使其移动到正确的位置，效果如下:

![](http://7xr2ek.com1.z0.glb.clouddn.com/blog%2Fimage%2Fflylayout3.png)

很明显这就是我们想要的效果，这就是圣杯布局！

---

## 双飞翼布局

我们在其实在第一步就把sub列和extra列定宽固定好了，只是由于遮挡住了main列才进行的代码改进。现在试想能不能只对main列代码进行一点改动，而不去动sub列和extra列的代码?

下面是淘宝UED给出的改进方案：

**给main列增加一个包裹层：**

    <div class="main">
        <div class="main-wrap">我是主列</div>
    </div>

**给包裹层设置左右外边距**

    .main-wrap {
        margin: 0 150px 0 150px;
     }

效果和圣杯布局一样：

![](http://7xr2ek.com1.z0.glb.clouddn.com/blog%2Fimage%2Fflylayout4.png)

>一切如此简单！除了添加了一个额外标签，其它各方面，表现都很完美（试了下IE5.5, 
>也没任何问题）。目前只用到了浮动和负边距，如果再引入相对定位，还可以实现三栏布
>局的各种组合

个人觉得双飞翼布局比圣杯布局更为简洁。

---

### 参考资料

* [双飞翼布局介绍-始于淘宝UED](http://www.imooc.com/wenda/detail/254035)
* [CSS布局之---淘宝双飞翼布局](http://www.cnblogs.com/langzs/archive/2013/01/27/taobaoshuangfeiyi.html)
* [射雕双飞翼布局的几个补充布局](http://www.css88.com/archives/1370)

