// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator (settings) {
const bodyCont = document.querySelector("body");


const divCard = document.createElement("div");
divCard.classList.add("card");

const divHeadline = document.createElement("div");
divHeadline.classList.add("headline");
divHeadline.textContent = settings.headline ;

const divAuthor = document.createElement("div");
divAuthor.classList.add("author");

const divImg =  document.createElement("div");
divImg.classList.add("img-container");

const Img = document.createElement("img");
Img.setAttribute("src",settings.authorPhoto);

const spanName = document.createElement("span");
spanName.textContent = "By" + settings.authorName;

bodyCont.appendChild(divCard);
divCard.appendChild(divHeadline);
divHeadline.appendChild(divAuthor);
divAuthor.appendChild(divImg);
divImg.appendChild(Img);
divAuthor.appendChild(spanName);

console.log(bodyCont);
return bodyCont;




}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response =>
    {//console.log(response.data.articles)
       const articlesArray = [response.data.articles.bootstrap , response.data.articles.technology, response.data.articles.jquery, response.data.articles.node]

       articlesArray.map ((element) =>
       {
           element.map((article) => 
           
           {
            
               console.log(article);

                 return cardCreator(article);
           })

           
       
        })

       
    })
.catch(error =>
    error);
