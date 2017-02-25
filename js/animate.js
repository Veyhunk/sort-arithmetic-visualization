function Animation() {
    this.frames = []
    this.setp = 0
    this.interval = 1500
    this._interval = 500
    this.isNotmove = false
    this.status = 0
}






Animation.prototype.play = function() {
    if (this.status === 0) {
        this.status = 1
        this.run()
    }
}
Animation.prototype.stop = function() {
        this.status = 0
    },
Animation.prototype.run = function() {
        var _this = this
        var interval = this.isNotmove ? this._interval : this.interval
        setTimeout(function() {
            if (_this.setp !== _this.frames.length - 1 && _this.status === 1) {
                _this.next()
                _this.run()
            } else {
                _this.status = 0
            }
        }, interval)
    }
Animation.prototype.next = function() {
    this.setp < (this.frames.length - 1) && this.setp++
        this.update()
}
Animation.prototype.prev = function() {
    this.setp > 0 && this.setp--
        this.update()
}
Animation.prototype.update = function() {
    var frame = this.frames[this.setp]
    this.isNotmove = true
    for (var i = 0; i < frame.length; i++) {

        if ($(frame[i].el).css('left') != frame[i].css.left) {
            this.isNotmove = false
        }
        $(frame[i].el).css(frame[i].css)
    }
}
