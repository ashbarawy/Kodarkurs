let newsArticle = [
  {
    title: "Latest News Serie A",
    subtitle: "first article",
    image: "pic to article"
},
{
  title: "Latest News Champions Leauge",
  subtitle: "second article",
  image: "pic of article"
}
]

let leatest1 = document.querySelector(".outer1")

newsArticles.forEach((article) => {
  article.innerHTML += `
    <div class="article">
      <h1>${article.title}</h1>
      <h2>${article.subtitle}</h2>
      <img src="${article.image}" />
    </div>
  `
})
