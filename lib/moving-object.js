// At this point, MovingObject may seem optional because only particle
// class gets to use this collection of methods.
function MovingObject(args) {
  this.pos = args.pos;
  this.vel = args.vel;
  this.radius = args.radius;
  this.color = args.color;
  this.game = args.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

// All moving objects hit wall and bounce off
MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.checkIsHittingWall();
  // this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.checkIsHittingWall = function() {
  if (this.pos[0] < 0 || this.pos[0] > this.game.DIM_X) {
    this.vel[0] *= -1;
  }
  if (this.pos[1] < 0 || this.pos[1] > this.game.DIM_Y) {
    this.vel[1] *= -1;
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  var objectDist = MovingObject.dist(this.pos, otherObject.pos);
  var radSum = this.radius + otherObject.radius;
  return (objectDist < radSum);
};

MovingObject.dist = function(pos1, pos2) {
  var dx = pos1[0] - pos2[0];
  var dy = pos1[1] - pos2[1];
  var dist = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
  return dist;
};

module.exports = MovingObject;
