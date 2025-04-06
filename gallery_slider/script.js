
  const $sliderElm = $(".slider");
  const $boxes = $sliderElm.children();
  const numberSliderBoxs = $boxes.length;
  const widthSliderBoxs = $boxes.first().outerWidth(true); // includes margin
  let currentIndex = 0;

  function moveLeft() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = numberSliderBoxs - 1;
    }
    $sliderElm.animate({
      scrollLeft: widthSliderBoxs * currentIndex
    }, 300);
  }

  function moveRight() {
    currentIndex++;
    if (currentIndex >= numberSliderBoxs) {
      currentIndex = 0;
    }
    $sliderElm.animate({
      scrollLeft: widthSliderBoxs * currentIndex
    }, 300);
  }

  $(".btn-left").on("click", moveLeft);
  $(".btn-right").on("click", moveRight);
