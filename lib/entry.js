
var GameView = require("./game-view.js");
var canvas = document.getElementById("game-canvas");
var gameview = new GameView(canvas.getContext("2d"),
                            canvas.width,
                            canvas.height);

// Start running the game
gameview.start();

$(document).ready(function() {
  var $input = $('#sliderInput');
  var steps = $input.attr('data-steps');
  var defValue = $input.attr('value');
  var $slider = $("<div class='vslider'><div class='vslider_bar'></div><ul class='vslider_sticks'></div>").appendTo($input.parent());

  $input.hide();

for (var i = 0; i < steps; i++) {
    var $stick = $('<li><div class="vslider_stick"a></div></li>').appendTo($slider.find('.vslider_sticks'));
    $stick.on('mouseenter', function() {
      $(this).addClass('active');
    }).on('mouseleave', function() {
      $(this).removeClass('active');
    });
  }

  var startDrag = function (event) {
    renderUI(getPercent(event));
    $(document.body).on('mousemove', onDrag);
    $(document.body).on('mouseup', stopDrag);
  },
  stopDrag = function (event) {
    $(document.body).off('mouseup', stopDrag);
    $(document.body).off('mousemove', onDrag);
  },
  onDrag = function (event) {
    renderUI(getPercent(event));
  };

var renderUI = function(percent) {
    var index = Math.round(percent * steps);
    index = index < steps ? index : steps;

    $('.vslider_sticks > li').find('div').css('opacity', 0);

for (var i = 0; i < index; i++) {
  $('.vslider_sticks > li:eq(' + i + ')').find('div').css('opacity', 1);
  }
};
  renderUI(defValue);

var getPercent = function(event) {
  var percent = (event.pageX - $slider.offset().left) / $('.vslider_sticks').width();
  percent = percent >= 0 ? percent : 0;
  percent = percent <= 1 ? percent : 1;
  return percent;
};

  $slider.on('mousedown', startDrag);
});
