//kontent dla białych boksów (NIE slider)
let whiteBoxesData = [
  {
    title: "Heading",
    text: "Lorem ipsum dolor sit amet.",
    imgSrc: "./images/logo2.png"},
  {
    title: "Heading",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus.",
  },
  {
    title: "Ultra Mega Super Long Heading",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet",
  }
]

//najpierw określ co chcesz miec w sliderze
let sliderData = [
  {
    title: "Heading",
    text: "Lorem ipsum dolor sit amet.",
    imgSrc: "./images/WP_logo.png"
  },
  {
    title: "Heading",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus.",
  },
  {
    title: "Ultra Mega Super Long Heading",
    text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet",
  },
  {
    title: "Heading, another one",
    text: "Lorem ipsum dolor sit amet.",
    imgSrc: "./images/WP_logo.png"
  }
]

//funckja wrzucająca kontent do slidera
function createWhiteBoxes(data, node){
  data.map( box => {
    let template;
    if(box.imgSrc){
    template = `
        <div class="white-box item">
          <h5>${box.title}</h5>
          <p>${box.text}</p>
          <img src="${box.imgSrc}" alt="logo"/>
        </div>
      `
    } else {
      template = `
        <div class="white-box item">
          <h5>${box.title}</h5>
          <p>${box.text}</p>
        </div>
      `
    }
    node.insertAdjacentHTML("beforeend", template)
  })
}

let sliderContainer = document.querySelector(".glider")
let whiteBoxesContainer = document.querySelector("#white-boxes")

//wywołanie funckji wrzucającej kontent do białych boksów
createWhiteBoxes(sliderData, sliderContainer)

createWhiteBoxes(whiteBoxesData, whiteBoxesContainer)

//a na koniec wywołanie funkcji która z białych boksów zrobi nam slider
document.addEventListener('DOMContentLoaded', function(){
  let glider = new Glider(document.querySelector('.glider'), {
    dragable: true,
    slidesToShow: 1,
    slidesToScrool: 1,
    dutaion: 1,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 1200px
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  })
})

