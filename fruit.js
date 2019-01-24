let fruits = ["Apple", "Orange", "Lemon", "Kiwi"]
  fruits.forEach((fruitName) => {
    console.log(fruitName)
  })

  let newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]

newsTitles.push ("JÄTTE LOGISKT")
  newsTitles.forEach((title) => {
    console.log(title)
    document.querySelector(".demo").innerHTML += `<h2>${title}</h2>`
  })






let newsArticle = [
{
  title: "Fruktsallad",
  color: "pink"
},

{  title: "Fruktsallad2",
   color: "pink"
}
]

let articles = document.querySelector(".article")
  newsArticle.forEach((article) => {
    console.log(article.title)
    console.log(article.color)
    document.querySelector(".articles").innerHTML += `<h2>${article.title}</h2>`

})
