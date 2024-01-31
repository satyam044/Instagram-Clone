function ExSearch(){
    const accessKey = "F9Bbk9DljdIsrFj2FQFbc2_yFlnh_h1bFyhcXKn7k7E";

    let formSubmit = document.querySelector("#Ex-search")
    let searchBar = document.querySelector("#Ex-search-input")
    let searchIcon = document.querySelector("#Ex-search-i")
    let searchResult = document.getElementsByClassName(".Ex-sec")

    let keyword = "";
    let page = 1;
    async function getImage(){
        keyword = searchBar.value;
        const searchUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

        const response = await fetch(searchUrl);
        const data = await response.json();

        const results = data.results;

        results.map((result)=>{
            const image = document.createElement("img");
            image.src = result.urls.small;
        })
    }
    formSubmit.addEventListener("submit",function(e){
        e.preventDefault();
        getImage();
    })
    
}

ExSearch()