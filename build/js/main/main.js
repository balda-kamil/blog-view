"use strict";

//kontent dla białych boksów (NIE slider)
var whiteBoxesData = [{
  title: "Heading",
  text: "Lorem ipsum dolor sit amet.",
  imgSrc: "./images/logo2.png"
}, {
  title: "Heading",
  text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus."
}, {
  title: "Ultra Mega Super Long Heading",
  text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet"
}]; //najpierw określ co chcesz miec w sliderze

var sliderData = [{
  title: "Heading",
  text: "Lorem ipsum dolor sit amet.",
  imgSrc: "./images/WP_logo.png"
}, {
  title: "Heading",
  text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus."
}, {
  title: "Ultra Mega Super Long Heading",
  text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet"
}, {
  title: "Heading, another one",
  text: "Lorem ipsum dolor sit amet.",
  imgSrc: "./images/WP_logo.png"
}]; //funckja wrzucająca kontent do slidera

function createWhiteBoxes(data, node) {
  data.map(function (box) {
    var template;

    if (box.imgSrc) {
      template = "\n        <div class=\"white-box item\">\n          <h5>".concat(box.title, "</h5>\n          <p>").concat(box.text, "</p>\n          <img src=\"").concat(box.imgSrc, "\" alt=\"logo\"/>\n        </div>\n      ");
    } else {
      template = "\n        <div class=\"white-box item\">\n          <h5>".concat(box.title, "</h5>\n          <p>").concat(box.text, "</p>\n        </div>\n      ");
    }

    node.insertAdjacentHTML("beforeend", template);
  });
}

var sliderContainer = document.querySelector(".glider");
var whiteBoxesContainer = document.querySelector("#white-boxes"); //wywołanie funckji wrzucającej kontent do białych boksów

createWhiteBoxes(sliderData, sliderContainer);
createWhiteBoxes(whiteBoxesData, whiteBoxesContainer); //a na koniec wywołanie funkcji która z białych boksów zrobi nam slider

document.addEventListener('DOMContentLoaded', function () {
  var glider = new Glider(document.querySelector('.glider'), {
    dragable: true,
    slidesToShow: 1,
    slidesToScrool: 1,
    dutaion: 1,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [{
      // screens greater than >= 1200px
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});
//# sourceMappingURL=main.js.map
