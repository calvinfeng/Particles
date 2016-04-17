var MovingObject = require("./moving-object.js");
var Util = require("./util.js");

function Particle(mass, pos, game) {
  MovingObject.call(this, {
    pos: pos,
    vel: Util.randomVec(10),
    color: "#000000",
    radius: mass,
    game: game
  });
  this.mass = mass;
}

Util.inherits(Particle, MovingObject);

Particle.prototype.collideWith = function(otherObject) {
  var collisionSound = new Audio('./sound/tonal-impact.wav');
  collisionSound.play();
  Particle.changeColorOnImpact(this, otherObject);
  Particle.elasticCollision(this, otherObject);
};

Particle.changeColorOnImpact = function(object, otherObject) {
  object.color = "#FF0000";
  otherObject.color = "#FF0000";
  setTimeout(function(){
    object.color = "#000000";
    otherObject.color = "#000000";
  }, 100);
};

Particle.elasticCollision = function(object, otherObject) {
  var m1 = object.mass;
  var m2 = otherObject.mass;

  var massFactor = 2*m2/(m1 + m2);
  var v1minusv2 = Util.vectorSubtraction(object.vel, otherObject.vel);
  var x1minusx2 = Util.vectorSubtraction(object.pos, otherObject.pos);
  var scalar = massFactor*Util.dotProduct(v1minusv2, x1minusx2);
      scalar /= Util.vectorNormSquared(x1minusx2);
  var vecOffset = Util.scalarMultiply(scalar, x1minusx2);

  var objectVPrime = Util.vectorSubtraction(object.vel, vecOffset);

  massFactor = 2*m1/(m1+m2);
  var v2minusv1 = Util.vectorSubtraction(otherObject.vel, object.vel);
  var x2minusx1 = Util.vectorSubtraction(otherObject.pos, object.pos);
  scalar = massFactor*Util.dotProduct(v2minusv1, x2minusx1);
  scalar /= Util.vectorNormSquared(x2minusx1);
  vecOffset = Util.scalarMultiply(scalar, x2minusx1);

  var otherObjectVPrime = Util.vectorSubtraction(otherObject.vel, vecOffset);
  object.vel = objectVPrime;
  otherObject.vel = otherObjectVPrime;
  //console.log("object 1 new vel: " + objectVPrime);
  //console.log("object 2 new vel: " + otherObjectVPrime);
};


module.exports = Particle;
