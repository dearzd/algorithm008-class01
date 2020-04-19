学习笔记



# 数组，链表，跳表

## 基本实现

### Array

内存管理器

申请数组时，在内存当中申请一段连续的地址，每一个地址可以通过内存管理器进行访问。

随机访问任何一个元素：O(1)

插入元素，需要挪动后续的元素：O(n)

删除元素：O(n)

示例：查看 Java ArrayList 实现的源码



### Linked List

为了弥补插入删除操作比较平凡的地方。

随机访问：O(n)

插入删除元素：O(1)

- 单链表

- 双链表

- 循环链表：Tail.next = Head

### Skip List

跳表是基于链表的

只能用与元素有序的情况

跳表对标的是平衡树（AVL Tree）和二分查找

搜索，插入，删除都是 O(logn)

最大的优点是原理简单、容易实现、方便扩展、效率更高，因此在一些热门项目里用来替代平衡树，例如 Redis、LvelDB 等。

#### 实现：

添加一级索引

添加二级索引

..

添加N级索引

维护成本较高：增加删除元素需要更新索引。

增加删除操作也会导致每一级索引的间隔不一，因为被删除或者增加了。

空间复杂度：O(n)

### 参考链接

> [Java 源码分析 (ArrayList)](https://www.geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/)
>
> [Linked List 标准实现](http://developer.classpath.org/doc/java/util/ArrayList-source.html)
>
> [Linked List 示例代码](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/code/LinkedList.java)
>
> [Java 源码分析 (LinkedList)](http://developer.classpath.org/doc/java/util/LinkedList-source.html)
>
> [LRU Cache - Linked List: LRU缓存机制](http://leetcode-cn.com/problems/lru-cache)
>
> [Redis - Skip List: ](http://www.zhihu.com/question/20202931)





# 栈，队列，双端队列，优先队列

## 基本实现

### 栈 Stack

先入后出

添加删除 O(1)，查询 O(n)

### 队列 Queue

先入先出

添加删除 O(1)，查询 O(n)

### 双端队列 Double-End Queue

Queue 和 Stack 的结合体

插入删除 O(1)，查询 O(n)

### 优先队列 Priority Queue

插入删除 O(n)，查询 O(logn)，

特点：按照优先级取出



## 工程实现

Java 里：

Stack 是 Class，

Queue、Double-End Queue 是 Interface，有很多 Class 实现

Priority Queue 是 Class



## 总结

由于开班前一天了才报名，几个预习课程都拖延到了周二才做的，再加上下班有时候忙别的事情去了，于是就导致后面的进度完全跟不上。

周末赶进度两天过后，深刻感觉到算法是要每天单独花时间练习的，如果拖一天，第二天第三天就会越累越多，到最后忙到不可开交。

所以，一定要打散，每天练习，不能积累。