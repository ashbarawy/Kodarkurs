// Our variables
let url = "https://newsapi.org/v2/everything?apiKey=f21c963b4b4742ce93858b0c3deccf01&q=juventus AND serie A AND (dybala OR ronaldo OR Allergi OR Mattiudi)&language=en&sortBy=relevancy"


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    document.querySelector(".serieA").innerHTML +=
      `<div class="news">
        <h2>${article.title}</h2>
        <h3>${article.description}</h3>
        <h5>${article.publishedAt}</5h>
        <img class="newsimage" src="${article.urlToImage}" />
      </div>`

    })
}

// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)





  // Our variables
  let urlseriesa = "https://newsapi.org/v2/everything?apiKey=f21c963b4b4742ce93858b0c3deccf01&q=juventus AND champions league AND (dybala OR ronaldo OR Allergi OR Mattiudi)&language=en&sortBy=relevancy"

  // Our main function which handles the news items and adds them to the DOM
  let receivedNewsseriesa = (newsData) => {

    // newsData is the entire response from the API.
    // newsData.articles is an array of objects representing each article.
    // For each article object from the API, we create a new div in HTML.
    newsData.articles.forEach((article) => {

      // Here we create and add html elements to our html file
      document.querySelector(".championsleauge").innerHTML +=
        `<div class="news">
          <h2>${article.title}</h2>
          <h3>${article.description}</h3>
          <h5>${article.publishedAt}</5h>
          <img class="newsimage" src="${article.urlToImage}" />
        </div>`
      })
  }
  
  // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
  // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
  fetch(urlseriesa)
    .then(response => response.json())
    .then(receivedNewsseriesa)
