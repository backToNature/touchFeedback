# touchFeedback.js - minimalist JavaScript library

touchFeedback.js is a library for touch feedback in 
mobile browsers;All functions are realized only in 2kb;


## index

* [Feature](#Feature)
* [Quick Start](#Quick Start)
* [API](#API)
* [Download](#Download)
* [Licenses](#Licenses)

## Feature

1. Supports all modern mobile browsers
2. Eliminate the 300ms delay between a physical tap and the firing of a touch feedback on mobile browsers
3. easy to use
4. small size

## Quick Start

### Initialize the feedback listener

You should specify one or more element as a listener.These elements will be trigger feedback if these have "data-touchFeedback" attribute.

	<div class="wrapper">
        <div class="touch" data-touchFeedback="true">touch me</div> <!-- this element will trigger feedback -->
    </div>
	<script>
		// new TouchFeedback('body'); global listener
		new TouchFeedback('.wrapper'); // only listen this element and this element's children
	</script>

[demo]()


## API

### Initialization

	new TouchFeedback(selector, option);

### option

* feedbackClass {String}: Define the class that needs to be added or removed when the feedback is triggered.

### method

	var feedback = new TouchFeedback(selector, option);
	feedback.destory();

* destory: 销毁监控

## Download




## Licenses

Released under the MIT, BSD, and GPL Licenses


	




