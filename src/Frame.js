'use strict';

function Frame() {
    this.pins = 10;
}

Frame.prototype.RemainingPins = function() {
    return this.pins;
};