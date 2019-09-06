/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator () {

  window.addEventListener("load",(event) => {
   img1.style.display = "inline"});

  const carouCont = document.querySelector(".carousel-container");
  

  const divCarousel = document.createElement("div");
  divCarousel.classList.add("carousel");

  const divLBtn = document.createElement("div");
  divLBtn.classList.add("left-button");

  const img1 = document.createElement("img");
  img1.setAttribute("src","./assets/carousel/mountains.jpeg");
  
  const img2 = document.createElement("img");
  img2.setAttribute("src","./assets/carousel/computer.jpeg");
  
  const img3 = document.createElement("img");
  img3.setAttribute("src","./assets/carousel/trees.jpeg");
  
  const img4 = document.createElement("img");
  img4.setAttribute("src","./assets/carousel/turntable.jpeg");

   const imgsArray = [img1, img2, img3 , img4] ;
  
  const divRBtn = document.createElement("div");
  divRBtn.classList.add("right-button");
  divRBtn.addEventListener("click", (event) =>
    {
      console.log(imgsArray);
        imgsArray.map((img) => {
          console.log(img);
        img.style.display = "inline";
        }
        )
    } 
  )

  carouCont.appendChild(divCarousel);
  divCarousel.appendChild(divLBtn);
  divCarousel.appendChild(img1);
  divCarousel.appendChild(img2);
  divCarousel.appendChild(img3);
  divCarousel.appendChild(img4);
  divCarousel.appendChild(divRBtn);

  return carouCont;

}

carouselCreator();


