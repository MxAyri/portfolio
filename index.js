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

let c = document.getElementById('canvi');
let $ = c.getContext('2d');

let w = c.width = window.innerWidth;
let h = c.height = window.innerHeight;

let draw = function(a, b, t) {
  $.lineWidth = 0.5;
  $.fillStyle = 'hsla(266, 100%, 1%, 1)';
  $.fillRect(0, 0, w, h);
  for (let i = -60; i < 60; i += 1) {
    $.strokeStyle = 'hsla(204, 94%, 74%, 1)';
    $.beginPath();
    $.moveTo(0, h / 2);
    for (let j = 0; j < w; j += 10) {
      $.lineTo(10 * Math.sin(i / 10) +
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    $.stroke();
  }
}
let t = 0;

let run = function() {
  window.requestAnimationFrame(run);
  t += 5;
  draw(33, 52 * Math.sin(t / 2400), t);
};

run();

//Nav
let flag=0;

let nav = document.querySelectorAll(".openNav");
for(let i =0; i < nav.length; i++){
  nav[i].addEventListener('click',openNav);
}

function openNav() {
    if (flag === 0){
        document.getElementById("blNav").style.width = "100%";
        document.getElementById("myNav").style.width = "320px";
        document.getElementById("idnavb").style.transform = "rotate(-90deg)";
        document.body.style.overflowY = "hidden";
        flag = 1;
    }
    else{   
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("blNav").style.width = "0%";
        document.getElementById("idnavb").style.transform = "rotate(0deg)";
        flag = 0;
        document.body.style.overflowY = "scroll";
    }
}
