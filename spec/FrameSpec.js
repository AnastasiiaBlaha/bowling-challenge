'use strict';

describe('Frame', function() {

    var frame;

    beforeEach(function() {
        frame = new Frame();
    });

    it('each frame starts with 10 pins', function() {
        expect(frame.RemainingPins()).toEqual(10);
    });

});