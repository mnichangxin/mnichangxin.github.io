---
layout: post
title: "jekyll静态博客搭建"
categories: GitHub
---

* content
{:toc}

## 前言
经常写博客是一件满足的事，一直没有找到合适的博客平台，要么太臃肿，或者太简陋。之前我曾经在新浪云上搭建过一个[博客](http://mnichangxin.sinaapp.com),功能各方面做的太渣，暂时告一段落。最近看到有人在github上做这件事，于是搜集了各方面的资料，费了几天的时间，弄出来一个简约的[博客](http://mnichangxin.github.io)。

---

## 关于github-page
>   [github-page](https://pages.github.com/)
>   是一个免费的静态网站托管平台，由github提供，它具有以下特点：
>
>   1. 免空间费，免流量费
>   2. 具有项目主页和个人主页两种选择
>   3. 支持页面生成，可以使用`jekyll`来布局页面，使用`markdown`来书写正文
>   4. 可以自定义域名

### 项目主页
为项目提供一个展示功能的网站，主要供宣传。网站目录需要是项目仓库的`gh-pages`分支，而且还提供了众多的模版，但可定制性不高。

### 个人主页
每个账号只能有一个仓库存放个人主页，仓库名称是约定俗成的`username.github.io` ，
搭建完毕后可以用`http://username.github.io`访问，当然可以自定义域名，后面会讲到。整个网站目录存放在仓库的`master`分支下。

---

## 关于jekyll
我们搭建的博客只是静态页面，如果写博客势必会写大量的标签。但是，`jekyll`出现了，而且github页面支持`jekyll`解析，这样就减少了工作量。`jekyll`安装需要`Ruby`环境，后面大量工作都是围绕这个展开。

---

## 搭建过程

主要是本地化的一些配置，搭建在Windows下进行。

* 安装Ruby

    Windows下可以用[Rubyinstall](http://rubyinstaller.org/downloads/)傻瓜式安装,各个平台的安装方式详见[Ruby官网](http://www.ruby-lang.org/zh_cn/downloads/)，注意安装完成后要配置一下环境变量。

* 安装RubyDevKit

    下载`DevKit`,版本要与`ruby`版本一致。下载下来后解压到任意目录，cmd进入此目录，运行如下命令
    
       $ ruby dk.rb init

    这步会在目录下生成一个config.yml文件，这只针对`rubyinstall`安装的有效，其他方式请修改`config.yml`文件。

    最后，执行如下命令安装

        $ ruby dk.rb install

* 安装Rubygems

    `gem`就像linux的一样。新版`Ruby`自带`gem`，安装可以跳过。可能国内网络不佳，推荐修改源，可以考虑[淘宝源](https://ruby.taobao.org/),按照他给的方法改好后基本就能用了。

* 安装jekyll

    `gem`直接执行安装:

        $ gem install jekyll

* 安装bundle
    
    在 **项目根目录**新建一个叫`Gemfile`的文件，没有后缀，编辑保存以下内容：

        source 'https://ruby.taobao.org/'
        gem 'github-pages'

    然后一步安装：

        $ gem install bundle

    命令会根据当前目录下的`Gemfile`，安装所需要的所有软件。这一步所安装的东西，可以说跟github本身的环境是完全一致的，所以可以确保本地如果没有错误，上传后也不会有错误。而且可以在将来使用下面命令，随时更新环境，十分方便。

        $ bundle update

    使用以下命令，启动本地服务，这时候访问`localhost:4000`,页面出现了！

---

## 后记

* 使用模版

    `github`上提供了`Jekyll`的大量[现成模版](http://jekyllthemes.org/)，可以直接拿来用，开源的嘛。

* 自定义域名

    如果觉得域名比较土，可以自定义域名，可以去`godaddy`上看一看。

* 熟悉Git
    
    环境搭建成功后，就需要到`github`上提交代码了，熟悉`git`操作是必须的。

---

## 参考资料

* [一步步在github上创建博客](http://www.pchou.info/web-build/2014/07/04/build-github-blog-page-08.html)
* [jekyll官方文档](http://jekyll.bootcss.com/docs/home/)
* [github-page官网](https://pages.github.com/)


    






