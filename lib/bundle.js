/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var GameView = __webpack_require__(1);
	var canvas = document.getElementById("game-canvas");
	var gameview = new GameView(canvas.getContext("2d"),
	                            canvas.width,
	                            canvas.height);
	
	// Start running the game
	gameview.start();
	
	// $(document).ready(function() {
	//   var $input = $('#sliderInput');
	//   var steps = $input.attr('data-steps');
	//   var defValue = $input.attr('value');
	//   var $slider = $("<div class='vslider'><div class='vslider_bar'></div><ul class='vslider_sticks'></div>").appendTo($input.parent());
	//
	//   $input.hide();
	//
	// for (var i = 0; i < steps; i++) {
	//     var $stick = $('<li><div class="vslider_stick"a></div></li>').appendTo($slider.find('.vslider_sticks'));
	//     $stick.on('mouseenter', function() {
	//       $(this).addClass('active');
	//     }).on('mouseleave', function() {
	//       $(this).removeClass('active');
	//     });
	//   }
	//
	//   var startDrag = function (event) {
	//     renderUI(getPercent(event));
	//     $(document.body).on('mousemove', onDrag);
	//     $(document.body).on('mouseup', stopDrag);
	//   },
	//   stopDrag = function (event) {
	//     $(document.body).off('mouseup', stopDrag);
	//     $(document.body).off('mousemove', onDrag);
	//   },
	//   onDrag = function (event) {
	//     renderUI(getPercent(event));
	//   };
	//
	// var renderUI = function(percent) {
	//     var index = Math.round(percent * steps);
	//     index = index < steps ? index : steps;
	//
	//     $('.vslider_sticks > li').find('div').css('opacity', 0);
	//
	// for (var i = 0; i < index; i++) {
	//   $('.vslider_sticks > li:eq(' + i + ')').find('div').css('opacity', 1);
	//   }
	// };
	//   renderUI(defValue);
	//
	// var getPercent = function(event) {
	//   var percent = (event.pageX - $slider.offset().left) / $('.vslider_sticks').width();
	//   percent = percent >= 0 ? percent : 0;
	//   percent = percent <= 1 ? percent : 1;
	//   return percent;
	// };
	//
	//   $slider.on('mousedown', startDrag);
	// });


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(2);
	var key = __webpack_require__(6);
	
	function GameView(ctx, canvasWidth, canvasHeight) {
	  this.ctx = ctx;
	  this.game = new Game(canvasWidth, canvasHeight);
	  this.setupVolumneSlider();
	}
	
	GameView.prototype.start = function() {
	  var self = this;
	  this.bindKeyHandlers();
	  setInterval(function() {
	    self.game.step();
	    self.game.draw(self.ctx);
	  }, 16);
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
	
	GameView.prototype.setupVolumneSlider = function() {
	  var startDrag = function (event) {
	    renderUI(getPercent(event));
	    $(document.body).on('mousemove', onDrag);
	    $(document.body).on('mouseup', stopDrag);
	  };
	
	  var stopDrag = function (event) {
	    $(document.body).off('mouseup', stopDrag);
	    $(document.body).off('mousemove', onDrag);
	  };
	
	  var onDrag = function (event) {
	    renderUI(getPercent(event));
	  };
	
	  var renderUI = function(percent) {
	    var index = Math.round(percent * steps);
	    index = index < steps ? index : steps;
	    $('.vslider_sticks > li').find('div').css('opacity', 0);
	    for (i = 0; i < index; i++) {
	      $('.vslider_sticks > li:eq(' + i + ')').find('div').css('opacity', 1);
	    }
	  };
	
	  var getPercent = function(event) {
	    var percent = (event.pageX - $slider.offset().left) / $('.vslider_sticks').width();
	    percent = percent >= 0 ? percent : 0;
	    percent = percent <= 1 ? percent : 1;
	    return percent;
	  };
	
	  var $input = $('#sliderInput');
	  var steps = $input.attr('data-steps');
	  var defValue = $input.attr('value');
	  var $slider = $("<div class='vslider'><div class='vslider_bar'></div><ul class='vslider_sticks'></div>").appendTo($input.parent());
	
	  for (var i = 0; i < steps; i++) {
	    var $stick = $('<li><div class="vslider_stick"a></div></li>').appendTo($slider.find('.vslider_sticks'));
	    $stick.on('mouseenter', function() {
	      $(this).addClass('active');
	    }).on('mouseleave', function() {
	      $(this).removeClass('active');
	    });
	  }
	
	  renderUI(defValue);
	  $input.hide();
	  $slider.on('mousedown', startDrag);
	};
	
	module.exports = GameView;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Particle = __webpack_require__(3);
	
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var MovingObject = __webpack_require__(4);
	var Util = __webpack_require__(5);
	
	function Particle(mass, pos, game) {
	  MovingObject.call(this, {
	    pos: pos,
	    vel: Util.randomVec(14),
	    color: "#000000",
	    radius: mass,
	    game: game
	  });
	  this.mass = mass;
	}
	
	Util.inherits(Particle, MovingObject);
	
	Particle.prototype.collideWith = function(otherObject) {
	  var collisionSound = new Audio('./sound/tonal-impact.wav');
	  var volume = this.getVolume();
	  // The less it conserves, sooner it stops moving
	  var eConserveFactor = 1 - (volume/10);
	
	  if (Util.vectorNorm(this.vel) > 2 && Util.vectorNorm(otherObject.vel) > 2) {
	    collisionSound.volume = volume;
	    collisionSound.play();
	    Particle.changeColorOnImpact(this, otherObject);
	  }
	
	  Particle.elasticCollision(this, otherObject, eConserveFactor);
	};
	
	Particle.changeColorOnImpact = function(object, otherObject) {
	  object.color = "#FF0000";
	  otherObject.color = "#FF0000";
	  setTimeout(function(){
	    object.color = "#000000";
	    otherObject.color = "#000000";
	  }, 100);
	};
	
	Particle.elasticCollision = function(object, otherObject, eConserveFactor) {
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
	
	  object.vel = Util.scalarMultiply(eConserveFactor, objectVPrime);
	  otherObject.vel = Util.scalarMultiply(eConserveFactor, otherObjectVPrime);
	  //console.log("object 1 new vel: " + objectVPrime);
	  //console.log("object 2 new vel: " + otherObjectVPrime);
	};
	
	Particle.prototype.getVolume = function() {
	  // An array of HTML <li> elements
	  var $sliderSticks = $(".vslider_stick");
	  var volume = 0;
	  $sliderSticks.each(function(index, stick) {
	    volume += parseInt($(stick).css('opacity'));
	  });
	  return volume/$sliderSticks.length;
	};
	
	module.exports = Particle;


/***/ },
/* 4 */
/***/ function(module, exports) {

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
	  if (this.pos[0] - this.radius < 0 || this.pos[0] + this.radius > this.game.DIM_X) {
	    this.vel[0] *= -1;
	  }
	  if (this.pos[1] - this.radius < 0 || this.pos[1] + this.radius > this.game.DIM_Y) {
	    this.vel[1] *= -1;
	  }
	};
	
	MovingObject.prototype.isCollidedWith = function(otherObject) {
	  if (this.isMoving() || otherObject.isMoving()) {
	    var objectDist = MovingObject.dist(this.pos, otherObject.pos);
	    var radSum = this.radius + otherObject.radius;
	    return (objectDist < radSum);
	  } else {
	    return false;
	  }
	};
	
	MovingObject.dist = function(pos1, pos2) {
	  var dx = pos1[0] - pos2[0];
	  var dy = pos1[1] - pos2[1];
	  var dist = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
	  return dist;
	};
	
	MovingObject.prototype.isMoving = function() {
	  return (this.vel[0] > 0) || (this.vel[1] > 0);
	};
	
	module.exports = MovingObject;


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	
	Util.vectorNorm = function(vector) {
	  return Math.sqrt((Math.pow(vector[0],2) + Math.pow(vector[1],2)));
	};
	
	module.exports = Util;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	//     keymaster.js
	//     (c) 2011-2013 Thomas Fuchs
	//     keymaster.js may be freely distributed under the MIT license.
	
	;(function(global){
	  var k,
	    _handlers = {},
	    _mods = { 16: false, 18: false, 17: false, 91: false },
	    _scope = 'all',
	    // modifier keys
	    _MODIFIERS = {
	      '⇧': 16, shift: 16,
	      '⌥': 18, alt: 18, option: 18,
	      '⌃': 17, ctrl: 17, control: 17,
	      '⌘': 91, command: 91
	    },
	    // special keys
	    _MAP = {
	      backspace: 8, tab: 9, clear: 12,
	      enter: 13, 'return': 13,
	      esc: 27, escape: 27, space: 32,
	      left: 37, up: 38,
	      right: 39, down: 40,
	      del: 46, 'delete': 46,
	      home: 36, end: 35,
	      pageup: 33, pagedown: 34,
	      ',': 188, '.': 190, '/': 191,
	      '`': 192, '-': 189, '=': 187,
	      ';': 186, '\'': 222,
	      '[': 219, ']': 221, '\\': 220
	    },
	    code = function(x){
	      return _MAP[x] || x.toUpperCase().charCodeAt(0);
	    },
	    _downKeys = [];
	
	  for(k=1;k<20;k++) _MAP['f'+k] = 111+k;
	
	  // IE doesn't support Array#indexOf, so have a simple replacement
	  function index(array, item){
	    var i = array.length;
	    while(i--) if(array[i]===item) return i;
	    return -1;
	  }
	
	  // for comparing mods before unassignment
	  function compareArray(a1, a2) {
	    if (a1.length != a2.length) return false;
	    for (var i = 0; i < a1.length; i++) {
	        if (a1[i] !== a2[i]) return false;
	    }
	    return true;
	  }
	
	  var modifierMap = {
	      16:'shiftKey',
	      18:'altKey',
	      17:'ctrlKey',
	      91:'metaKey'
	  };
	  function updateModifierKey(event) {
	      for(k in _mods) _mods[k] = event[modifierMap[k]];
	  };
	
	  // handle keydown event
	  function dispatch(event) {
	    var key, handler, k, i, modifiersMatch, scope;
	    key = event.keyCode;
	
	    if (index(_downKeys, key) == -1) {
	        _downKeys.push(key);
	    }
	
	    // if a modifier key, set the key.<modifierkeyname> property to true and return
	    if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
	    if(key in _mods) {
	      _mods[key] = true;
	      // 'assignKey' from inside this closure is exported to window.key
	      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
	      return;
	    }
	    updateModifierKey(event);
	
	    // see if we need to ignore the keypress (filter() can can be overridden)
	    // by default ignore key presses if a select, textarea, or input is focused
	    if(!assignKey.filter.call(this, event)) return;
	
	    // abort if no potentially matching shortcuts found
	    if (!(key in _handlers)) return;
	
	    scope = getScope();
	
	    // for each potential shortcut
	    for (i = 0; i < _handlers[key].length; i++) {
	      handler = _handlers[key][i];
	
	      // see if it's in the current scope
	      if(handler.scope == scope || handler.scope == 'all'){
	        // check if modifiers match if any
	        modifiersMatch = handler.mods.length > 0;
	        for(k in _mods)
	          if((!_mods[k] && index(handler.mods, +k) > -1) ||
	            (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
	        // call the handler and stop the event if neccessary
	        if((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
	          if(handler.method(event, handler)===false){
	            if(event.preventDefault) event.preventDefault();
	              else event.returnValue = false;
	            if(event.stopPropagation) event.stopPropagation();
	            if(event.cancelBubble) event.cancelBubble = true;
	          }
	        }
	      }
	    }
	  };
	
	  // unset modifier keys on keyup
	  function clearModifier(event){
	    var key = event.keyCode, k,
	        i = index(_downKeys, key);
	
	    // remove key from _downKeys
	    if (i >= 0) {
	        _downKeys.splice(i, 1);
	    }
	
	    if(key == 93 || key == 224) key = 91;
	    if(key in _mods) {
	      _mods[key] = false;
	      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
	    }
	  };
	
	  function resetModifiers() {
	    for(k in _mods) _mods[k] = false;
	    for(k in _MODIFIERS) assignKey[k] = false;
	  };
	
	  // parse and assign shortcut
	  function assignKey(key, scope, method){
	    var keys, mods;
	    keys = getKeys(key);
	    if (method === undefined) {
	      method = scope;
	      scope = 'all';
	    }
	
	    // for each shortcut
	    for (var i = 0; i < keys.length; i++) {
	      // set modifier keys if any
	      mods = [];
	      key = keys[i].split('+');
	      if (key.length > 1){
	        mods = getMods(key);
	        key = [key[key.length-1]];
	      }
	      // convert to keycode and...
	      key = key[0]
	      key = code(key);
	      // ...store handler
	      if (!(key in _handlers)) _handlers[key] = [];
	      _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
	    }
	  };
	
	  // unbind all handlers for given key in current scope
	  function unbindKey(key, scope) {
	    var multipleKeys, keys,
	      mods = [],
	      i, j, obj;
	
	    multipleKeys = getKeys(key);
	
	    for (j = 0; j < multipleKeys.length; j++) {
	      keys = multipleKeys[j].split('+');
	
	      if (keys.length > 1) {
	        mods = getMods(keys);
	      }
	
	      key = keys[keys.length - 1];
	      key = code(key);
	
	      if (scope === undefined) {
	        scope = getScope();
	      }
	      if (!_handlers[key]) {
	        return;
	      }
	      for (i = 0; i < _handlers[key].length; i++) {
	        obj = _handlers[key][i];
	        // only clear handlers if correct scope and mods match
	        if (obj.scope === scope && compareArray(obj.mods, mods)) {
	          _handlers[key][i] = {};
	        }
	      }
	    }
	  };
	
	  // Returns true if the key with code 'keyCode' is currently down
	  // Converts strings into key codes.
	  function isPressed(keyCode) {
	      if (typeof(keyCode)=='string') {
	        keyCode = code(keyCode);
	      }
	      return index(_downKeys, keyCode) != -1;
	  }
	
	  function getPressedKeyCodes() {
	      return _downKeys.slice(0);
	  }
	
	  function filter(event){
	    var tagName = (event.target || event.srcElement).tagName;
	    // ignore keypressed in any elements that support keyboard data input
	    return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
	  }
	
	  // initialize key.<modifier> to false
	  for(k in _MODIFIERS) assignKey[k] = false;
	
	  // set current scope (default 'all')
	  function setScope(scope){ _scope = scope || 'all' };
	  function getScope(){ return _scope || 'all' };
	
	  // delete all handlers for a given scope
	  function deleteScope(scope){
	    var key, handlers, i;
	
	    for (key in _handlers) {
	      handlers = _handlers[key];
	      for (i = 0; i < handlers.length; ) {
	        if (handlers[i].scope === scope) handlers.splice(i, 1);
	        else i++;
	      }
	    }
	  };
	
	  // abstract key logic for assign and unassign
	  function getKeys(key) {
	    var keys;
	    key = key.replace(/\s/g, '');
	    keys = key.split(',');
	    if ((keys[keys.length - 1]) == '') {
	      keys[keys.length - 2] += ',';
	    }
	    return keys;
	  }
	
	  // abstract mods logic for assign and unassign
	  function getMods(key) {
	    var mods = key.slice(0, key.length - 1);
	    for (var mi = 0; mi < mods.length; mi++)
	    mods[mi] = _MODIFIERS[mods[mi]];
	    return mods;
	  }
	
	  // cross-browser events
	  function addEvent(object, event, method) {
	    if (object.addEventListener)
	      object.addEventListener(event, method, false);
	    else if(object.attachEvent)
	      object.attachEvent('on'+event, function(){ method(window.event) });
	  };
	
	  // set the handlers globally on document
	  addEvent(document, 'keydown', function(event) { dispatch(event) }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
	  addEvent(document, 'keyup', clearModifier);
	
	  // reset modifiers to false whenever the window is (re)focused.
	  addEvent(window, 'focus', resetModifiers);
	
	  // store previously defined key
	  var previousKey = global.key;
	
	  // restore previously defined key and return reference to our key object
	  function noConflict() {
	    var k = global.key;
	    global.key = previousKey;
	    return k;
	  }
	
	  // set window.key and window.key.set/get/deleteScope, and the default filter
	  global.key = assignKey;
	  global.key.setScope = setScope;
	  global.key.getScope = getScope;
	  global.key.deleteScope = deleteScope;
	  global.key.filter = filter;
	  global.key.isPressed = isPressed;
	  global.key.getPressedKeyCodes = getPressedKeyCodes;
	  global.key.noConflict = noConflict;
	  global.key.unbind = unbindKey;
	
	  if(true) module.exports = assignKey;
	
	})(this);


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map