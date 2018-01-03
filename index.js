'use strict';

try {
  /**
   * 显示图片
   * @param  {string} url     图片URL
   * @param  {number} width   图片展示宽度
   * @param  {number} height  图片展示调试
   * @param  {number} opt    可选配置
   *                   opt.bgColor  图片背景颜色
   */
  console.__proto__.img = function(url, width, height, opt) {
    var u = Math.floor((height ? height : 200) / 2); // padding-up
    var d = u - 14; // padding-down
    var r = Math.floor((width ? width : 200) / 2); // padding-right
    var l = r; // padding-left
    var lh = (height ? height : 200) + 5; // line-height

    var x = 0; // background-position-x
    var y = 0; // background-position-y
    var w = r * 2; // background-size width
    var h = u * 2; // background-size height

    var css = 'padding:' + u + 'px ' + r + 'px ' + d + 'px ' + l + 'px;'
      + 'line-height:' + lh + 'px;'
      + 'background:url(' + url + ') no-repeat;'
      + 'background-position-x:' + x + 'px;'
      + 'background-position-y:' + y + 'px;'
      + 'background-size:' + w + 'px ' + h + 'px;';

    if (!opt) opt = {};

    if (opt.bgColor) {
      css += 'background-color:' + opt.bgColor;
    }

    console.log('%c', css);
  };
} catch (e) {}
