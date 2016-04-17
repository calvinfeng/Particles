var Game = require("./game.js");
var key = require("./keymaster.js");

function GameView(ctx, canvasWidth, canvasHeight) {
  this.ctx = ctx;
  this.game = new Game(canvasWidth, canvasHeight);
}

GameView.prototype.start = function() {
  var self = this;
  this.bindKeyHandlers();
  setInterval(function() {
    self.game.step();
    self.game.draw(self.ctx);
  }, 10);
};

// This has become obselete, waiting for more features
GameView.prototype.bindKeyHandlers = function() {
  var self = this;
  key('up', function() {
    console.log("Moving!");
    //self.game.ship.power(-0.1);
  });
  key('down', function() {
    console.log("Moving!");
    //self.game.ship.power(0.1);
  });
};

module.exports = GameView;
