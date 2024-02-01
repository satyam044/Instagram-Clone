function ExSearch() {
    let id = 0;

    const arr = [
        "model",
        "fashion",
        "style",
        "beauty",
        "glamour",
        "girl",
        "posing",
        "trend",
        "vogue",
        "high fashion",
        "luxury",
        "lifestyle",
        "urban",
        "trendy",
        "photography",
        "beautiful",
        "photooftheday",
        "travel",
        "adventure",
        "explore",
        "instagood",
        "instastyle",
        "fashionista",
        "vibes",
        "confidence",
        "swagger",
        "news",
        "chic",
        "modern",
        "classy",
        "edgy",
        "trendsetter",
        "grace",
    ];

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
        <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + keyword}" alt="">
        <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
        <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
        <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
        <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
        <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
        <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
        `
        searchResult.innerHTML += ExHtml;
    }
    keydown = searchBar.addEventListener("keypress", function () {
        searchResult.innerHTML = "";
    })

    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();
        getImage();
    });

    searchIcon.addEventListener("click",function(){
        getImage()
    });
    
    window.addEventListener("load",()=>{
        async function getImage() {
            keyword = searchBar.value;
            const searchUrl = `https://pixabay.com/api/?key=${accessKey}&q=${keyword}&pretty=true`;
    
            const response = await fetch(searchUrl);
            const data = await response.json();
                    
            ExHtml = `
            <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
            <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + keyword}" alt="">
            <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
            <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
            <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
            <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
            <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
            <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
            <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
            <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
            <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
            <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
            `
            searchResult.innerHTML += ExHtml;
        }
        getImage()
    })
    window.addEventListener("scroll", function () {
        scrollable = document.documentElement.scrollHeight - window.innerHeight;
        scrollend = window.scrollY;

        if (Math.ceil(scrollend) === (scrollable)) {
            async function getImage() {
                keyword = searchBar.value;
                const searchUrl = `https://pixabay.com/api/?key=${accessKey}&q=${keyword}&pretty=true`;
        
                const response = await fetch(searchUrl);
                const data = await response.json();

                ExHtml = `
                <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
                <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
                <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
                <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
                <img id="${id+++1}" src="${data.hits[Math.floor(Math.random() * 20)].largeImageURL}" alt="">
                <img id="${id+++1}" src="${"https://source.unsplash.com/random/?" + arr[Math.floor(Math.random() * arr.length)]}" alt="">
                `
                searchResult.innerHTML += ExHtml;
            }
            getImage()
        }
    })
    
    let filledImg = searchResult
    filledImg.addEventListener("click",function(e){
        console.log(e.target.id)
    })
}

ExSearch()