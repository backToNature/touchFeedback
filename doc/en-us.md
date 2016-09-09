# touchFeedback.js - lightWeight JavaScript library

![](http://0d077ef9e74d8.cdn.sohucs.com/pWc9ydG_gif)

``touchFeedback.js`` is a library for touch feedback in 
mobile browsers;All functions are realized only in 2kb;

[中文说明](https://github.com/backToNature/touchFeedback/blob/master/doc/zh-cn.md)

## index

* [feature](#feature)
* [quick-start](#quick-start)
* [api](#api)
* [download](#download)
* [licenses](#licenses)

## feature

1. Supports all modern mobile browsers
2. Eliminate the 300ms delay between a physical tap and the firing of a touch feedback on mobile browsers.
3. easy to use
4. small size

## quick-start

### Initialize the feedback listener

You should specify one or more element as a listener.These elements will be trigger feedback if these have "data-touchFeedback" attribute.

	<div class="wrapper">
        <div class="touch" data-touchFeedback="true">touch me</div> <!-- this element will trigger feedback -->
    </div>
	<script>
		// new TouchFeedback('body'); global listener
		new TouchFeedback('.wrapper'); // only listen this element and this element's children
	</script>

[demo](http://www.dearhaoge.com/touchFeedback/demo/basic.html)


## api

### Initialization

	new TouchFeedback(selector, option);

### option

* feedbackClass {String}: Define the class that needs to be added or removed when the feedback is triggered.

### method

	var feedback = new TouchFeedback(selector, option);
	feedback.destory();

* destory: destory the listener

## download

[source](http://www.dearhaoge.com/touchFeedback/src/touchFeedback.js)

## licenses

Released under the MIT, BSD, and GPL Licenses


	




