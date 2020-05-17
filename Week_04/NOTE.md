学习笔记

# 深度优先，广度优先搜索

深度优先 DFS

```js
let visited = new Set()

function dfs(node, visited) {
  if（visited.has(node) {
    return;
  }
  visited.add(node);
  // process current
  
  for (let nextNode in node.children) {
    if (!visited.has(nextNode)) {
      dfs(nextNode, visited);
    }
  }
}
```



广度优先 BFS

```js
let visited = new Set();

function bfs(graph, start, end) {
  let queue = [];
  queue.append([start]);
  visited.add(start);
  
  while (queue.length) {
    let node = queue.pop();
    visited.add(node);
    
    process(node);
    
    nodes = generate_related_nodes(node);
    
    queue.push(nodes);
  }
}
```



## 贪心算法

贪心算法是一种在每一步选择采取在当前状态下最优的选择，从而希望导致结果是全局最优。

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。

贪心算法一般可以解决一些最优化问题，如图中的最小生成树、求哈夫曼编码等。但是对于工程问题，一般得不到我们要求的最优答案。

经常做为辅助算法，或者解决一些对结果精度要求不高的场景。

适用场景：问题能够分为子问题来解决，子问题的最优解能够地推到最终问题的最优解。

## 动态规划

保存之前的运算结果，回退。

