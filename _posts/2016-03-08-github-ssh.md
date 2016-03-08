---
layout: post
title: "Github之SSH连接配置"
categories: GitHub
---

* content
{:toc}

## 配置

1. 检查密钥是否存在

        $ ls -al ~/.ssh

    默认情况下，公共密钥的文件名是下列之一:

    * id_dsa.pub
    * id_ecdsa.pub
    * id_ed25519.pub
    * id_rsa.pub

    如果你没有一个现有的公共和私有密钥对，或不想使用任何可用连接到GitHub，请到第二步生成一个新的SSH密钥；否则到第三步。

2. 生成一个新的密钥 
    
        $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

        Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]

        Enter passphrase (empty for no passphrase): [Type a passphrase]

        Enter same passphrase again: [Type passphrase again]


3. 添加SSH代理

        $ eval "$(ssh-agent -s)"

        $ ssh-add ~/.ssh/id_rsa

    添加你的SSH密钥的SSH代理。如果你使用一个现有的SSH密钥，而不是产生一个新的SSH密钥，您需要与您现有的私钥文件名取代`id_rsa`。

4. 复制密钥到Github

        $ clip < ~/.ssh/id_rsa.pub

    `id_rsa`是你自己的文件名，这句将密钥复制到粘贴板，到Github的账户设置新建密钥粘贴即可

## 参考

详情见Github官网：[Generating an SSH key](https://help.github.com/articles/generating-an-ssh-key/)






