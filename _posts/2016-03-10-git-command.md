---
layout: post
title: "Git常用操作命令(随时更新)"
categories: Git
---

* content
{:toc}

## 本地版本库管理

* 初始化版本库： ```$ git init```
* 查看当前仓库状态：```$ git status```
* 查看修改：```$ git diff [--file]```
* 显示最近提交日志：```$ git log [--pretty=oneline]```
* 命令记录日志查看：```$ git reflog```
* 当前版本、上个版本、往上N个版本：```HEAD HEAD^ HEAD~N```
* 回退到上一版本：```$ git reset [--hard] commit_id```
* 向暂存区添加修改：```$ git add {.|[--file]}```
* 向当前分支添加修改：```$ git commit -m 'commit'```
* 撤销修改：```$ git checkout --file```
* 删除文件：```$ git rm [--file]```
* 创建标签：```$ git tag <tagname>```
* 删除标签：```$ git tag <tagname> -d```
* 推送标签到远程：```$ git push origin <tagname> [--tags]```

---

## 分支管理 

* 创建分支：```$ git branch <name>```
* 删除分支：```$ git branch -d <name>```
* 查看当前分支：```$ git branch```
* 切换分支: ```$ git checkout <name>```
* 创建并切换分支：```$ git checkout -b <name>```
* 合并指定分支到当前分支：```$ git merge <name>```
* 合并分支禁用Fast Forword: ```$ git merge -no-ff -m "commit" <name>```
* 查看分支合并图：```$ git log --graph```
* 隐藏分支：```$ git stash [list]```
* 恢复隐藏的分支: ```$ git stash apply```
* 删除隐藏的分支并恢复：```$ git stash pop```
* 彻底删除隐藏的分支：```$ git stash drop```
* 舍弃一个没有合并过的分支：```$ git branch -D <name>```

---

## 远程管理

* 添加远程仓库引用：```$ git remote add origin {<SSH>|<HTTP>}```
* 克隆远程仓库：```$ git clone origin```
* 推送到远程仓库：```$ git push origin branch```
* 在本地创建和远程分支对应的分支：```$ git checkout -b branch origin/branch```
* 建立远程仓库与本地的联系：```$ git branch --set-upstream-to=origin/<branch> branch```
* 拉取远程最新提交：```$ git fetch```
* 拉取远程最新提交并合并：```$ git pull```
* 删除远程分支：```$ git push origin :<branch>```

---

## 参考资料

* [廖雪峰的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
* [Git基本操作](http://www.runoob.com/git/git-basic-operations.html)
* [Git简明指南](http://www.runoob.com/manual/git-guide/)
* [Git完整命令手册](http://git-scm.com/docs)




