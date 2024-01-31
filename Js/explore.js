function ExSearch() {
    const accessKey = "42130655-4dc8270fabe9e178cce07c32c";

    let formSubmit = document.querySelector("#Ex-search")
    let searchBar = document.querySelector("#Ex-search-input")
    let searchIcon = document.querySelector("#Ex-search-i")
    let searchResult = document.querySelector(".Ex-sec")

    let keyword = "";
    ExHtml = "";
    async function getImage() {
        keyword = searchBar.value;
        const searchUrl = `https://pixabay.com/api/?key=${accessKey}&q=${keyword}&pretty=true`;

        const response = await fetch(searchUrl);
        const data = await response.json();

        ExHtml = `
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        `
        searchResult.innerHTML += ExHtml;
    }
    keydown = searchBar.addEventListener("keydown", function () {
        searchResult.innerHTML = "";
        getImage()
    })

    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();
        getImage();
    });

    searchIcon.addEventListener("click",function(){
        getImage()
    });
    
    window.addEventListener("load",()=>{
        getImage()
    })
    window.addEventListener("scroll", function (event) {
        scrollable = document.documentElement.scrollHeight - window.innerHeight;
        scrollend = window.scrollY;

        if (Math.ceil(scrollend) === (scrollable)) {
            getImage()
        }
    })
}

ExSearch()