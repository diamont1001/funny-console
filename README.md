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
$npm install funny-console --save
```

```js
// 引入库
require('funny-console');
// 显示图片
console.img('https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/flower.gif', 256, 208);
```

效果如下：
![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/img.gif)

```js
// 显示图片，加背景颜色
console.img('https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/flower.gif', 256, 208, {
  bgColor: '#00FF00'
});
```

效果如下：
![](https://raw.githubusercontent.com/diamont1001/funny-console/master/docs/imgs/img-bg.gif)

未完，待续……
