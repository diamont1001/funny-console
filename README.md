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
  - opt.bgColor：背景颜色，同 CSS 的 `background-color`

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


### 清屏：`console.clear`
![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/clear.png)


未完，待续……
