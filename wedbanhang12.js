var images = ["hình web/hinh1.jpg", "hình web/hinh2.jpg", "hình web/hinh3.jpg"];
var num = 0;

function next() {
  var slider = document.getElementById("slider-img");
  slider.classList.add("fade-out");
  setTimeout(function () {
    num++;
    if (num >= images.length) {
      num = 0;
    }
    slider.src = images[num];
    slider.classList.remove("fade-out");
    slider.classList.add("fade-in");
  }, 1000);
}

function prev() {
  var slider = document.getElementById("slider-img");
  slider.classList.add("fade-out");
  setTimeout(function () {
    num--;
    if (num < 0) {
      num = images.length - 1;
    }
    slider.src = images[num];
    slider.classList.remove("fade-out");
    slider.classList.add("fade-in");
  }, 1000);
}

setInterval(next, 4000);
