# touchFeedback.js

![](http://0d077ef9e74d8.cdn.sohucs.com/pWc9ydG_gif)

touchFeedback.js是用来解决h5在触摸反馈上的不足的一个JS库，一切逻辑都在2kb中实现。

[一些有趣的反馈效果](http://www.dearhaoge.com/touchFeedback/demo/cool-feedbacks.html)

## 目录

* [简介](#简介)
* [特点](#特点)
* [快速上手](#快速上手)
* [API](#API)
* [授权协议](#授权协议)

## 简介

对于触摸反馈，使用最多的是方案``active伪类``和``a标签包裹``，经过测试，两种方案都存在不少问题，最为明显的要数反馈延迟(和click在移动端的表现一样)。而通过添加&移除class的方式则可以避免这种问题，如果你忍受不了这个延迟，试试touchFeedback吧。

[如何让h5体验接近APP（一）触摸反馈](http://note.youdao.com/noteshare?id=6acccc8bebfe14b33029d7905b9727db)

## 特点

1. 支持所有移动端流行浏览器
2. 反应灵敏, 没有300ms延迟
3. 使用简单
4. 体积小，仅2kb

## 快速上手

### 启用反馈监控

1. 指定一个父元素或者body作为监控范围。
2. 给需要反馈的元素加上``data-touchFeedback="true"``
3. 添加反馈样式，class名默认为feedback
	
	<style>
        .touch {
            height: 100px;
            background: #699f00;
            text-align: center;
            line-height: 100px;
            font-size: 30px;
            color: #fff;
        }
        .touch.feedback {
            background: #38f;
        }
    </style>
	<div class="wrapper">
        <div class="touch" data-touchFeedback="true">touch me</div> <!-- 此元素生效 -->
    </div>
	<script>
		// new TouchFeedback('body'); 全局启用
		new TouchFeedback('.wrapper'); // 仅对class为wrapper的元素及其子元素启用
	</script>

[演示](http://www.dearhaoge.com/touchFeedback/demo/basic.html)

## API

### 初始化

	new TouchFeedback(selector, option);

### 参数

* feedbackClass {String}: 指定触发反馈时添加&删除的className

### 方法

	var feedback = new TouchFeedback(selector, option);
	feedback.destory();

* destory: 销毁监控


## 授权协议

Released under the MIT, BSD, and GPL Licenses


	




