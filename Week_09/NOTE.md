学习笔记

## 高级动态规划

复杂度来源：

1. 状态拥有更多维度（二维、三维，甚至更多维或者需要压缩）
2. 状态方程更加复杂

```js
// 63. 不同路径 II 状态转义方程
// if 0, dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
// if 1, dp[i][j] = 0
```

