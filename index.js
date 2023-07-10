document.querySelectorAll('a').forEach((elem) => {

	elem.onmouseenter =
	elem.onmouseleave = (e) => {

		const tolerance = 10

		const left = 0
		const right = elem.clientWidth

		let x = e.pageX - elem.offsetLeft

		if (x - tolerance < left) x = left
		if (x + tolerance > right) x = right

		elem.style.setProperty('--x', `${ x }px`)

	}

})

var c = document.getElementById('canvi');
var $ = c.getContext('2d');

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var draw = function(a, b, t) {
  $.lineWidth = 0.5;
  $.fillStyle = 'hsla(266, 100%, 1%, 1)';
  $.fillRect(0, 0, w, h);
  for (var i = -60; i < 60; i += 1) {
    $.strokeStyle = 'hsla(204, 94%, 74%, 1)';
    $.beginPath();
    $.moveTo(0, h / 2);
    for (var j = 0; j < w; j += 10) {
      $.lineTo(10 * Math.sin(i / 10) +
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    $.stroke();
  }
}
var t = 0;

var run = function() {
  window.requestAnimationFrame(run);
  t += 5;
  draw(33, 52 * Math.sin(t / 2400), t);
};

run();
