var Game = require("./game.js");
var key = require("./keymaster.js");

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
