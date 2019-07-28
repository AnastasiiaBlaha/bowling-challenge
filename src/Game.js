'use strict';

function Game() {
    this.score = 0;
}

Game.prototype.GetTotalScore = function() {
    return this.score;
};