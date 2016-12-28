# touchFeedback.js - lightWeight JavaScript library

![](http://0d077ef9e74d8.cdn.sohucs.com/pWc9ydG_gif)

``touchFeedback.js`` is a library for touch feedback in 
mobile browsers;All functions are realized only in 2kb;

[中文说明](https://github.com/backToNature/touchFeedback/blob/master/doc/zh-cn.md)

[test demo](http://www.dearhaoge.com/touchFeedback/demo/delay-test.html)

[some feedbacks](http://www.dearhaoge.com/touchFeedback/demo/cool-feedbacks.html)

## index

* [intro](#intro)
* [feature](#feature)
* [quick-start](#quick-start)
* [api](#api)
* [changeLog](#changelog)
* [download](#download)
* [licenses](#licenses)

## intro

For touch feedback,the most used way is ``active pseudo class`` and ``HTML Anchor Element (<a>)``.But after testing,both way has some problems.The most obvious problem is ``feedback delay``(just like click delay).You can avoid this problem by adding & removing `Class`.If you can't tolerate this delay, try ``touchFeedback``.

## feature

1. Supports all modern mobile browsers
2. Eliminate the 300ms delay between a physical tap and the firing of a touch feedback on mobile browsers.
3. easy to use
4. small size

## quick-start

### Initialize the feedback listener

You should specify one or more element as a listener.These elements will be trigger feedback if these have "data-touchFeedback" attribute.

```
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
    <div class="touch" data-touchFeedback="true">touch me</div> <!-- this element will trigger feedback -->
</div>
<script>
    // new TouchFeedback('body'); global listener
    new TouchFeedback('.wrapper'); // only listen this element and this element's children
</script>
```

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

## changeLog

### v1.0.0

1. fixed bug: If ``bindprop`` element have any children , addClass will disabled.

### v1.0.1

1. fixed bug: ``destory`` unuseful.

### v1.0.2

1. fixed bug: Touch the wrapper's area will report errors.

### v1.1.0

1. add: Multi-touch has been supported.

### v1.1.1
1. bixed bug:now support class
```

<script>
new TouchFeedback(".abc");
</script>

```

## download

[source](http://www.dearhaoge.com/touchFeedback/src/touchFeedback.js)

## licenses

Released under the MIT, BSD, and GPL Licenses


    




