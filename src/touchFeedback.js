!(function () {
    var eventBind = function (container, bindProp, feedbackClass) {
        var eventData = {};
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
            }
        };

        container.addEventListener('touchstart', function (e) {
            eventData.event = e.changedTouches ? e.changedTouches[0] : e;
            eventData.startY = eventData.event.pageY;
            eventData.startX = eventData.event.pageX;
            if (e.target.getAttribute(bindProp) === 'true') {
                classUtil.addClass(e.target, feedbackClass);
            }
        });

        container.addEventListener('touchmove', function (e) {
            eventData.event = e.changedTouches ? e.changedTouches[0] : e;
            if ((eventData.event.pageY !== eventData.startY || eventData.event.pageX !== eventData.startX) && e.target.getAttribute(bindProp) === 'true') {
                classUtil.removeClass(e.target, feedbackClass);
            }
        });

        container.addEventListener('touchcancel', function (e) {
            eventData.event = e.changedTouches ? e.changedTouches[0] : e;
            if (e.target.getAttribute(bindProp) === 'true') {
                classUtil.removeClass(e.target, feedbackClass);
            }
        });

        container.addEventListener('touchend', function (e) {
            eventData.event = e.changedTouches ? e.changedTouches[0] : e;
            if (e.target.getAttribute(bindProp) === 'true') {
                classUtil.removeClass(e.target, feedbackClass);
            }
        });
    };
    var TouchFeedback = function (selector, option) {
        this._container = document.querySelector(selector);
        option = option || {};
        this._bindProp = option.bindProp || 'data-touchFeedback';
        this._feedbackClass = option.feedbackClass || 'feedback';
        eventBind(this._container, this._bindProp, this._feedbackClass);
    };
    TouchFeedback.prototype.destory = function () {
        var _this = this;
        _this._container.removeEventListener('touchstart');
        _this._container.removeEventListener('touchmove');
        _this._container.removeEventListener('touchcancel');
        _this._container.removeEventListener('touchend');
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