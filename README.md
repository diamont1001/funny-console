# Console 百科

`console` 我们用的多了，但是，我们平时用的很多的只是 `console.log`，其实它还有更多的更好玩的玩法，你，知道吗？

首先来看看天猫的 `console` 输出：

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/tmall.png)

看这个还是挺好玩的，先做了个安全提醒，然后再做下招聘广告，逼格马上就上来了。

当然，平时咱们的站点页面也可以这么搞。下面，就让我们一起来揭开 `console` 的神秘面纱吧。

## Console API

参考 [https://developer.mozilla.org/en-US/docs/Web/API/console](https://developer.mozilla.org/en-US/docs/Web/API/console)，关于 `console` 的 API 这里说的比较全。


### 1. 图片展示：`console.img`（非原生，要引入本库 `funny-console`）

图片展示我觉得比较酷炫，但是接口调用起来还是有点麻烦，因此我这里给封装了一层，加了个接口 `console.img`，可以更方便的在 Dev Tools 里输出图片。

#### 参数说明

`console.img(url, width, height, opt)`

- url: 要显示的图片URL
- width: 图片展示大小 width，默认为 200
- height：图片展示大小 height，默认为 200
- opt：可选参数
  (opt.bgColor：背景颜色，同 CSS 的 `background-color`)

```bash
# 库安装
$npm install funny-console --save
```

```js
// 引入库
require('funny-console');
// 显示图片
console.img('https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/flower.gif', 256, 208);
```

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/img.gif)

```js
// 显示图片，加背景颜色
console.img('https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/flower.gif', 256, 208, {
  bgColor: '#00FF00'
});
```

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/img-bg.gif)


### 2. 常用输出 `log/warn/error`

- `console.log`: 输出一般信息
- `console.dir`: 输出一般信息（与 `log` 不同的地方在于，输出的是 DOM 对象时，log 输出的是 html 结构，dir 输出的是对象形式）
- `console.wran`: 输出警告信息（黄色警告，作为程序员，是对该类信息无视的 ^_^）
- `console.error`: 输出错误信息（红色警告）

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/log-warn-error.png)

上面几个方法，都可以使用 printf 风格的格式化占位符，支持的占位符如下：

| 占位符 | 功能 |
| --- | --- |
| %s | 格式化成字符串输出 |
| %d 或 %i | 格式化成数值输出 |
| %f | 格式化成浮点数输出 |
| %o | 转化成展开的DOM元素输出 |
| %O | 转化成JavaScript对象输出 |
| %c | 字符串支持 `CSS` 样式输出 |

```js
console.log('%d年%d月%d日', 2018, 1, 3); // 输出 2018年1月3日
console.log('%d', 3/10); // 输出 0
console.log('%f', 3/10); // 输出 0.3
```

下面重点研究下 `%c`，以 `console.log` 为例。

```js
console.log('%chello world', 'font-size:16px;color:white;padding: 20px 50px;background-image: -webkit-radial-gradient(hsla(120,70%,60%,.9),hsla(360,60%,60%,.9))');
```
![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/log-hello-world.png)

也可以连着来：

```js
console.log('%chello %cworld', 'color:#696969;', 'color:red;font-size:16px;');
```
![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/log-hello-world-2.png)

有了样式的支持，可以想象有空间就大了，可以随心所欲的把输出弄的五花八门了，下面我们来看看它支持哪些样式吧。

#### 支持的样式

> Quite a few CSS properties are supported by this styling; you should experiment and see which ones prove useful.

从 [文档](https://developer.mozilla.org/en-US/docs/Web/API/Console) 上看到下面这句话，我瞬间奔溃了，好吧，还是得自己一个一个试咯。
具体结果看这里吧 [console.log 支持的样式汇总](https://github.com/diamont1001/funny-console/blob/master/docs/css.md)


### 3. `console.assert`

跟 `console.log` 差不多，只是 `console.assert` 多了个判断，接收至少两个参数，当第一个参数值为 `false` 的时候，它才会输出，输出的是第二个参数，同样的，也支持样式。

```js
console.assert(1===1, 'sb'); // 不会输出
console.assert(1===2, 'sb'); // 断言失败，所以会输出 sb
```

### 4. `console.count`

console.count([label])

输出代码执行到该行的次数，可以通过 `label` 参数来区分计数器。

```js
console.count('label_1'); // label_1: 1
console.count('label_1'); // label_1: 2
console.count('label_1'); // label_1: 3
console.count('label_2'); // label_2: 1
console.count('label_1'); // label_1: 4
console.count('label_2'); // label_2: 2
```

### 5. 分组输出 `console.group / console.groupEnd / console.groupCollapsed`

把输出的内容产生不同的层级嵌套关系（分组），每一个 `console.group` 会增加一层嵌套，相反要减少一层嵌套可以使用 `console.groupEnd` 方法。

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/group.png)

#### `console.groupCollapsed`

`console.groupCollapsed` 跟 `console.group` 差不多，只是该方法输出的时候会默认折叠，在一些数据量大的情况下，可使用该方法输出，以至版面不会太长造成干扰。


### 6. `console.table`

这是个有逼格的输出，会把输出的对象以表格的形式输出。

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/table.png)


### 7. `console.time / console.timeEnd`

- `console.time(name)`: 计时开始
- `console.timeEnd(name)`: 计时结束并输出计时时间

精度为 `ms` 级别（注意不是 1ms，具体要看浏览器的实现）

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/time.png)


### 8. `console.profile / console.profileEnd`

性能分析所用，利用该方法我们可以很方便地通过 Profiles 面板看到需要监控的代码的运行性能。

但是，据我了解，这个东东在 Chrome 58 版本之后就用不了了，具体看「[这里](https://bugs.chromium.org/p/chromium/issues/detail?id=675734)」，至于是 BUG 还是故意的，就不知道了。

反正从 58 版本开始，profile 面板也更名为 memory，而增加了 performence 面板，可以通过这个面板工具来调试更多的性能相关的东西。
具体可以参考：[Chrome DevTools: JavaScript CPU Profiling in Chrome 58](https://developers.google.com/web/updates/2016/12/devtools-javascript-cpu-profile-migration)


### 9. `console.trace`

调用堆栈跟踪调试，具体看下面效果。

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/trace.png)


### 10. `monitor` 和 `unmonitor`

`monitor` 可以监控指定函数的被调用情况。

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/monitor.png)


### 11. 清屏：`console.clear`

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/clear.png)


## 控制台其他有趣介绍

除了上面介绍的一些命令以外，其实控制台还提供了很多好玩的东西，为页面开发调试提供了极大的方便。

| 命令 | 功能 |
| --- | --- |
| $ | document.querySelector，相当于在控制台中，原生支持了 jQuery 的选择器 |
| $$ | document.querySelectorAll |
| $_ | 上一个表达式的值 |
| $0 - $4 | 最近 5 个 Elements 面板选中的 DOM 元素（$0 为最近一个） |
| copy | 将在控制台获取到的内容复制到剪贴板，比如 `copy(document.body)` |
| dir | console.dir 的缩写 |
| keys | 对象的键名列表, 返回以键名为元素组成的数组 |
| values | 对象的值列表, 返回对象所有值组成的数组 |


### 1. `$`、`$$` 和 `$_`

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/query.png)


### 2. `copy`

将在控制台获取到的内容复制到剪贴板。

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/copy.png)


### 3. `keys` 和 `values`

`keys` 和 `values` 可以快速输出对象的「键」和「值」。

![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/keys-values.png)


## 附录

- [https://developer.mozilla.org/en-US/docs/Web/API/console](https://developer.mozilla.org/en-US/docs/Web/API/console)

