(function ($) {
    var eventBind = function (_this) {
        var eventData       = {},
            vague           = 5,
            bindProp        = _this._bindProp, 
            feedbackClass   = _this._feedbackClass;

        _this.startFunc = function (e) {
            var event = e.changedTouches ? e.changedTouches[0] : e,
                identifier = eventData[event.identifier] = {};
            identifier.startY = event.pageY;
            identifier.startX = event.pageX;
            identifier.target = $(event.target).closest('[' + bindProp + '="true"]');
            if (identifier.target) {
                $(identifier.target).addClass(feedbackClass);
            }
        };

        _this.moveFunc = function (e) {
            var event = e.changedTouches ? e.changedTouches[0] : e,
                identifier = eventData[event.identifier];
            if (event.target && Math.abs(identifier.startY - event.pageY) > vague) {
                $(identifier.target).removeClass(feedbackClass);
            }
        };

        _this.cancelFunc = function (e) {
            var event = e.changedTouches ? e.changedTouches[0] : e,
                identifier = eventData[event.identifier];
            if (identifier.target) {
                $(identifier.target).removeClass(feedbackClass);
            }
            delete eventData[event.identifier];
        };

        _this.$container.on('touchstart', _this.startFunc).on('touchmove', _this.moveFunc)
            .on('touchcancel', _this.cancelFunc).on('touchend', _this.cancelFunc);
    };

    var TouchFeedback = function (el, option) {
        this.$container = $(el);
        option = option || {};
        this._bindProp = option.bindProp || 'data-touchFeedback';
        this._feedbackClass = option.feedbackClass || 'feedback';
        eventBind(this);
    };

    TouchFeedback.prototype.destory = function () {
        var _this = this;
        _this.$container.off('touchstart', _this.startFunc).off('touchmove', _this.moveFunc)
            .off('touchcancel', _this.cancelFunc).off('touchend', _this.cancelFunc);
    };

    $.fn.touchfeedback = function (el, option) {
        new TouchFeedback(el, option);
    };
} (jQuery));
