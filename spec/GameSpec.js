'use strict';

describe('Game', function() {

    var game;

    beforeEach(function () {
        game = new Game();
    });

    it('game starts at score 0', function() {
        expect(game.GetTotalScore()).toEqual(0);
    });
});