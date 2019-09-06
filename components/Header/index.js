// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function header() {

    const headerCont = document.querySelector(".header-container");

    const divH = document.createElement("div");
    divH.classList.add("header");

    const spanDate = document.createElement("span");
    spanDate.classList.add("date");
    spanDate.textContent = "MARCH 28, 2019";

    const titleH = document.createElement("h1");
    titleH.textContent = "Lambda Times";

    const spanTemp = document.createElement("span");
    spanTemp.classList.add("temp");
    spanTemp.textContent = "98°";

    headerCont.appendChild(divH);
    divH.appendChild(spanDate);
    divH.appendChild(titleH);
    divH.appendChild(spanTemp);

    console.log(headerCont);
    return headerCont;
}

header();
