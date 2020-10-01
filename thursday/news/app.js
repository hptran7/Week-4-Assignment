let articles = news.articles
console.log(articles)

let replaceDetail = articles.map((newsInfo)=>{
    for (let info in newsInfo){
        if(newsInfo[info]== null){
            newsInfo[info]=" ";
            console.log(info)
        }
    }
    return newsInfo
})



let newsDetail = replaceDetail.map((newsInfo)=>{
    return `<li class="list-group-item bg-light">
            <div>
            <img src="${newsInfo.urlToImage}" class ="newsImage"/>
            </div>
            <div>
            <h5>Author: ${newsInfo.author}</h5>     
            <h6>title: ${newsInfo.title}</h6>
            <p>Description: ${newsInfo.description} </p>
            <a href="${newsInfo.url}">link news</a>
            <label>Published at: ${newsInfo.publishedAt}</label>
            </div>
            </li>
    `    
}) 

let newsSection =  document.getElementById("list-group")
newsSection.insertAdjacentHTML("beforeend",newsDetail.join(" "))


let newSources = sources.sources
let sourcesMenu = document.getElementById("sourcesMenu")

let sourcesDetail = newSources.map((source)=>{
    return`<li class="nav-item">
    <a class="nav-link active" id="${source.id}" href="#">${source.name} </a>
  </li>
    `
})
sourcesMenu.insertAdjacentHTML("beforeend",sourcesDetail.join(" "))

