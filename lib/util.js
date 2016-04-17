function Util() {}

Util.inherits = function(ChildClass, ParentClass) {
  function Surrogate(){}
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
  ChildClass.prototype.constructor = ChildClass;
};

Util.randomVec = function(length) {
  var vx = (Math.random()*(2*length + 1)) - length;
  var vy = (Math.random()*(2*length + 1)) - length;
  return [vx, vy];
};

Util.vectorSubtraction = function(vec1, vec2) {
  return [(vec1[0] - vec2[0]),(vec1[1] - vec2[1])];
};

Util.vectorAddition = function(vec1, vec2) {
  return [(vec1[0] + vec1[0]), (vec1[1] + vec2[1])];
};

Util.vectorNormSquared = function(vector) {
  return (Math.pow(vector[0],2) + Math.pow(vector[1],2));
};

Util.dotProduct = function(vec1, vec2) {
  return (vec1[0]*vec2[0]) + (vec1[1]*vec2[1]);
};

Util.scalarMultiply = function(scalar, vector) {
  return [scalar*vector[0], scalar*vector[1]];
};

module.exports = Util;
