---
layout: post
title: "JS原型链"
categories: JavaScript
---

* content
{:toc}

## 前言

在`C++/Java`中,都是靠"类"的概念进行封装和继承的。`JavaScript`没有类这种概念，但有"对象"的概念(近期发布的的`ES6`提出了新增了类的语法)。`JS`的原型继承机制不同于传统的方式，一开始难以接受。

我刚开始看原型的时候，彻底被折服，`JS`的魅力大概就在这。看了不少的关于原型的博客文章，翻了几遍书，大都是众说纷纭，但基本原理是一致的。我在这写一下我的理解，其中有些晦涩难懂的地方没弄明白，敬请指正。

## 构造函数

构造函数就是用new创建对象时调用的函数。构造函数也是函数，为了区别其他函数，首字母一般大写。用构造函数的好处在于，调用构造函数可以创建多个对象，其中属性和方法可以实现共享。

构造函数内部用`this`可以很简单的添加属性：

    function Person(name) {
        this.name = name;
        this.sayName = function() {
            console.log(this.name);
        };
    }

也可以用`Object.defineProperty()`方法初始化构造函数：

    function Person() {
        Object.defineProperty(this, name, {
            get: function() {
                return name;
            },
            set: function(newName) {
                name = newName;
            },
            enumerable: true,
            configurable: true
        });
        this.sayName = function() {
            console.log(this.name);
        }
    }

关于`Object.defineProperty()`可以看我上一篇博文[深入理解JS对象](http://mnichangxin.github.io/2016/04/02/object/)

## 原型对象

可以把原型对象看作是对象的基类。

### 鉴别原型对象

    function isPrototype(object, name) {
        return name in object && !object.hasOwnProperty(name);
    }

这是因为`in`操作符会遍历自有属性和原型属性，`hasOwnProperty()`只会遍历自有属性。

### [[Prototype]]属性

这个内部属性几乎是所有对象(除了`null`和`undfined`)具有的，后面会说到它的具体形式。
可以调用`Object.getPrototypeOf()`方法读取`[[Prototype]]`属性的值。

### 构造函数中使用原型对象

    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayname = function() {
        console.log(this.name);
    }
   
如果向原型添加多个属性的时候，为了避免代码冗余，可以用对象字面形式写法：
 
    function Person(name) {
        this.name = name;
    }
    Person.prototype = {
        sayname: function() {
            console.log(this.name);
        },
        toString: function() {
            console.log('The name is' + this.name);
        }    
    };

但是，有一个问题要注意，书上是这么说的：

>当一个函数被创建时，它的`prototype`属性也被创建，且该原型对象的`constructor`
>指向该函数。当使用对象字面形式改写原型对象时，其`constructor`
>属性将被置为泛用对象`Object`。

为了避免这种情况发生，需要重置其`constructor`属性，即在对象里面添加：

    constructor: Person;

### 其他

另外，通过冻结对象或封印对象是在操作对象的自有属性，仍然可以在原型对象添加属性
，因为没有冻结指向原型的指针。

## 原型链

以下面为例：

    /* 构造函数对象 */
    function Foo(name) {
        this.name = name;
        this.sayname = function() {
            console.log(this.name);
        }
    }
    var f1 = new Foo('John');
    var f2 = new Foo('Tony');
    /* 普通对象 */
    var o1 = new Object();
    var o2 = new Object();

上面创建了利用构造函数创建了两个对象，利用`Object`通用类创建了两个普通对象。

实际上，调用构造函数创建对象时，构造函数把`prototype`指向原型对象，原型对象回调属性`constructor`指向原构造函数，对象自动把指针指向原型对象。原型对象也是对象，会重复以上过程，这就构成了一条**原型链**。那什么时候到头呢？直到`Object`,`Object`的原型对象将置为`null`。

那么，这个指针究竟是什么呢？其实很多人以为这个指针就是`prototype`,这是一个误解，真正的指针是`__proto__`(`Firfox`暴露出来的内部属性，非正式标准，这里只是为了说明方便。最好用`Object.getPrototyprOf()`方法)。

`__proto__`是几乎所有对象所具有的属性，除了`null`和`undefined`,而`prototype`只能是**函数对象**所具有的。

以上代码的具体情况可以看我画的这张图(来源于[鸟哥的博客](http://www.laruence.com/2010/05/13/1462.html)，我稍微改造了一下):

![](http://7xr2ek.com1.z0.glb.clouddn.com/blog/image/prototype.png)

看了这张图，多画几遍，相信就豁然开朗了！

## 参考资料

* [图解JavaScript原型链](http://blog.rainy.im/2015/07/20/prototype-chain-in-js/)
* [理解JavaScript的原型链和继承](https://blog.oyanglul.us/javascript/understand-prototype.html)
* [JavaScript面向对象精要](https://book.douban.com/subject/26352658/)




















