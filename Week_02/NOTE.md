学习笔记

## Hash Table

把关键码值映射到一个位置来访问记录，

映射函数叫散列函数（Hash Function），存放记录的数组叫做哈希表（或散列表）。

工程上用的比较多的是Hash Table 上再抽象出来的 Map 和 Set



## Map

key-value对，key不重复

> Java 源码，主要看HashMap 的源码的 get 和 put 就行了



## Set

不重复元素的集合

> Java 源码是基于 HashMap 实现，就是把 value 放到 HashMap 的 key 上、

##  Tree

单链表只有一个 next，如果有多个 next 1、next2、next3，就变成了树。

链表就是特殊化的树。

链表有环，就是图。

链表就是特殊化的图。



## Binary Tree

儿子节点只有两个，左儿子，右儿子。

前序遍历：根左右

中序遍历： 左根右

后序遍历：左右根

## Binary Search Tree

又叫二叉排序树、有序二叉树、排序二叉树，是指一颗空树或者具有一下行至的二叉树：

- 左子树上的所有节点均小于它的根节点的值；
- 右子树上的所有节点均大于它的根节点的指；
- 以此类推：左、右子树也分别是二叉查找树

中序遍历：升序排序。

查询、插入、删除，都是logn。



## Heap

特性：可以迅速找到一组数据中的最大值或最小值（重点，或）。

将根节点最大的堆叫做大顶堆或大根堆，根节点最小的堆叫小顶堆或小根堆。

常见的堆根据实现形式有：二叉堆、斐波拉切堆等。

Find Mac：O(1）

Delete max： O(logN）

Insert：O(logN) or O(1）



## 二叉堆

通过完全二叉树来实现（不是二叉搜索树）

- 完全数
- 树当中任意节点的值总是大于等于其儿子节点的值

根节点是：a[0]

- 索引为i的左孩子的索引是2* + 1；
- 右孩子的索引是 2* + 2；
- 父亲节点的索引是 floor((i - 1) / 2)。