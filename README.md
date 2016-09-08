# touchFeedback.js

touchFeedback.js是用来解决h5在触摸反馈上的不足的一个JS库，一切逻辑都在2kb(gzip前)中实现。

## 目录

* [特点](#特点)
* [快速上手](#快速上手)
* [API](#API)
* [下载](#下载)
* [授权协议](#授权协议)

## 特点

1. 支持所有移动端流行浏览器
2. 没有300ms延迟
3. 使用简单
4. 体积小

## 快速上手

### 启用反馈监控

指定一个父元素或者body作为监控范围。	
	
	<div class="wrapper">
        <div class="touch" data-touchFeedback="true">touch me</div> <!-- 此元素生效 -->
    </div>
	<script>
		// new TouchFeedback('body'); 全局启用
		new TouchFeedback('.wrapper'); // 仅对class为wrapper的元素及其子元素启用
	</script>

[演示]()


## API

### 初始化

	new TouchFeedback(selector, option);

### 参数

* feedbackClass {String}: 指定触发反馈时添加&删除的className

### 方法

	var feedback = new TouchFeedback(selector, option);
	feedback.destory();

* destory: 销毁监控

## 下载




## 授权协议

Released under the MIT, BSD, and GPL Licenses


	




