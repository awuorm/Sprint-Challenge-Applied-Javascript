// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// tab component
function tapCreator(settings) {
 
    const divTab = document.querySelector(".topics");
 
    // create DOM elements
    const topicH = document.createElement("div");
    topicH.classList.add("tab");
    topicH.textContent = settings;

   //append elements to the DOM 
    divTab.appendChild(topicH);

    return divTab;
}


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => 
    { 
        const topics = response.data.topics.map((element) =>
        {
            tapCreator(element);
        })
    })
    .catch(error => {
        return error;
    })


