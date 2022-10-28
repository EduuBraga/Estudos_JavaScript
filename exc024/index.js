let article = document.querySelector('article')

let childrenFromArticle = Array.from(article.children)

childrenFromArticle.forEach(child => {
  child.classList.add('item_article')
})



let subTitle = document.querySelector('h2')

console.log(subTitle.parentElement)
console.log(subTitle.nextElementSibling)
console.log(subTitle.previousElementSibling)