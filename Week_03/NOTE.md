学习笔记



# 递归

一般的递归函数写法的模板：

1. 终结条件
2. 当层处理逻辑
3. 进入下一层
4. 清理当层

分析最近可重复的子问题。



# 分治，回溯

分治回溯其实就是特殊的递归，

本质上，就是找重复性，划分子问题。i

分治代码模板：

```js
//terminator
function divideConquer(problem, param1, param2, ...) {
  if (problem is none) {
    return result;
  }

  // prepare data
  var data = prepareData(problem);
  var subproblems = splitProblem();

  // conquer subproblems
  var subResult1 = divideConquer(subproblems[0], param1, param2, ...);
  var subResult2 = divideConquer(subproblems[1], param1, param2, ...);
  var subResult3 = divideConquer(subproblems[2], param1, param2, ...);

  // process and generate the final result
  result = processResult(subResult1, subResult2, subResult3, ...);
      
  // revert the current level states
}

```



回溯是采用试错的思想