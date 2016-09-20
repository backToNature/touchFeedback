/*!touchFeedback - https://github.com/backToNature/touchFeedback/*/
!(function () {
    var eventBind = function (_this) {
        var eventData = {}, container = _this._container,
            bindProp = _this._bindProp, feedbackClass = _this._feedbackClass;

        var classUtil = {
            hasClass: function (elem, cls){
                cls = cls || '';
                if(cls.replace(/\s/g, '').length == 0) return false;
                return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
            },
            addClass: function (elem, cls){
                if(!this.hasClass(elem, cls)){
                    elem.className += ' ' + cls;
                }
            },
            removeClass: function (elem, cls){
                if(this.hasClass(elem, cls)){
                    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
                    while(newClass.indexOf(' ' + cls + ' ') >= 0){
                        newClass = newClass.replace(' ' + cls + ' ', ' ');
                    }
                    elem.className = newClass.replace(/^\s+|\s+$/g, '');
                }
            },
            closest: function (elem, attribute) {
                var cur, match;
                for (cur = elem; cur; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && cur.nodeType === 1 && cur.getAttribute(attribute) === 'true') {
                        break;
                    }
                }
                return cur;
            }
        };

        _this.startFunc = function (e) {
            eventData.event = e.changedTouches ? e.changedTouches[0] : e;
            eventData.startY = eventData.event.pageY;
            eventData.startX = eventData.event.pageX;
            eventData.target = classUtil.closest(e.target, bindProp);
            if (eventData.target) {
                classUtil.addClass(eventData.target, feedbackClass);
            }
        };

        container.addEventListener('touchstart', _this.startFunc);

        _this.moveFunc = function (e) {
            eventData.event = e.changedTouches ? e.changedTouches[0] : e;
            if (eventData.target && (eventData.event.pageY !== eventData.startY || eventData.event.pageX !== eventData.startX)) {
                classUtil.removeClass(eventData.target, feedbackClass);
            }
        };

        container.addEventListener('touchmove', _this.moveFunc);

        _this.cancelFunc = function (e) {
            if (eventData.target) {
                classUtil.removeClass(eventData.target, feedbackClass);
            }
        };

        container.addEventListener('touchcancel', _this.cancelFunc);

        container.addEventListener('touchend', _this.cancelFunc);
    };

    var TouchFeedback = function (selector, option) {
        this._container = document.querySelector(selector);
        option = option || {};
        this._bindProp = option.bindProp || 'data-touchFeedback';
        this._feedbackClass = option.feedbackClass || 'feedback';
        eventBind(this);
    };

    TouchFeedback.prototype.destory = function () {
        var _this = this;
        _this._container.removeEventListener('touchstart', _this.startFunc);
        _this._container.removeEventListener('touchmove', _this.moveFunc);
        _this._container.removeEventListener('touchcancel', _this.cancelFunc);
        _this._container.removeEventListener('touchend', _this.cancelFunc);
    };

    if (typeof define === 'function') {
        define(function() {
            return TouchFeedback;
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = TouchFeedback;
    } else {
        this.TouchFeedback = TouchFeedback;
    }
}());