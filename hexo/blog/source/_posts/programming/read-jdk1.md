---
title: java源码阅读(1)--ArrayList和Vector
category: 编程
date: 2018-07-18 17:48:48
tags:
- java源码
---
java源码阅读的工作开始了，先从简单的入手，看了看ArrayList和Vector两个类。总的来说，两个类很相似，都继承AbstractList，实现了List接口：
```java
public class Vector<E>
    extends AbstractList<E>
    implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```
```java
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```
两个类底层都是维护一个Object[]的数组，初始长度是10。最大的区别是Vector里面的方法都是同步的，添加了synchronized修饰符，效率比较低，所以平时编程中较少使用Vector。
依稀记得以前翻thinking in java的时候，里面说Vector是遗留代码，不建议使用，回去以后再翻翻看。