var Particle = require("./particle.js");

function Game(width, height) {
  this.DIM_X = width;
  this.DIM_Y = height;
  this.NUM_PARTICLES = 10;
  this.particles = [];
  this.addParticles();
}

Game.prototype.addParticles = function() {
  while (this.particles.length < this.NUM_PARTICLES) {
    this.particles.push(new Particle(this.randomMass(),
    this.randomPosition(),
    this));
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.allObjects().forEach(function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.allObjects = function() {
  return this.particles;
};


Game.prototype.moveObjects = function() {
  this.allObjects().forEach(function(object) {
    object.move();
  });
};

Game.prototype.randomPosition = function() {
  var randx = Math.floor(Math.random() * this.DIM_X + 1);
  var randy = Math.floor(Math.random() * this.DIM_Y + 1);
  console.log(randx);
  console.log(randy);
  return [randx, randy];
};

Game.prototype.randomMass = function() {
  return Math.floor(Math.random()*5 + 5);
};

Game.prototype.checkCollisions = function() {
  for (var i = 0; i < this.allObjects().length - 1; i++) {
    for (var j = i + 1; j < this.allObjects().length; j++) {
      if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
        this.allObjects()[i].collideWith(this.allObjects()[j]);
      }
    }
  }
};

module.exports = Game;
