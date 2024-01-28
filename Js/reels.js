function reel() {
    // Reels Section

    var arr = ["backgrounds", "fashion", "nature", "science", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", "business", "music"]
    let wordArr = Math.floor(Math.random() * arr.length)
    apiKey = "41892263-905de2f23204ca327b10c5f7f"
    apiUrl = "https://pixabay.com/api/videos/?key=" + apiKey;

    let reelVideo = document.querySelector(".reelContainer .reelNextVideo video")
    let reelDown = document.querySelector(".reelContainer .reelDown i")
    let reelLike = document.querySelector(".reelContainer .likeReel")
    let reelIco1 = document.querySelector(".reelIcon .reelIco1 p")
    let reelIco2 = document.querySelector(".reelIcon .reelIco2 p")
    let reelIcon2 = document.querySelector(".reelIcon .reelIco2")
    let reelIco3 = document.querySelector(".reelIcon .reelIco3 p")

    let liked = false
    let clicked = 0

    async function getReel() {
        var response = await fetch(apiUrl + "&category=" + arr[wordArr] + "&pretty=true");
        var data = await response.json();
        reelVideo.src = data.hits[wordArr].videos.tiny.url;
        reelIco1.innerText = data.hits[wordArr].views;
        reelIco2.innerText = data.hits[wordArr].likes;
        reelIco3.innerText = data.hits[wordArr].downloads;


        reelDown.addEventListener("click", function () {
            let wordArr = Math.floor(Math.random() * arr.length)

            reelVideo.src = data.hits[wordArr].videos.tiny.url;

            var response = fetch(apiUrl + "&category=" + arr[wordArr] + "&pretty=true");
            liked = false
            reelIcon2.classList.remove("fa-solid")
            reelIco1.innerText = data.hits[wordArr].views;
            reelIco2.innerText = data.hits[wordArr].likes;
            reelIco3.innerText = data.hits[wordArr].downloads;
        })

        let iconChange = reelVideo.addEventListener("dblclick", function likeReel() {
            if (liked == false) {
                reelIcon2.classList.add("fa-solid")
                reelLike.style.opacity = "0.5"
                reelIco2.innerText++ + 1;
                clicked = 1
                liked = true;
                setTimeout(() => {
                    reelLike.style.opacity = "0"
                }, 1000);
            } else {
                reelIco2.innerText === 1;
                liked = true
                reelLike.style.opacity = "0.5"
                setTimeout(() => {
                    reelLike.style.opacity = "0"
                }, 1000);
            }
        })

        reelLike.addEventListener("dblclick", function likeReel() {
            if (liked == false) {
                reelIcon2.classList.add("fa-solid")
                reelLike.style.opacity = "0.5"
                reelIco2.innerText++ + 1;
                clicked = 1
                liked = true;
                setTimeout(() => {
                    reelLike.style.opacity = "0"
                }, 1000);
            } else {
                reelIco2.innerText === 1;
                liked = true
                reelLike.style.opacity = "0.5"
                setTimeout(() => {
                    reelLike.style.opacity = "0"
                }, 1000);
            }
        })
        let removeLike = reelIcon2.addEventListener("click", function () {
            if (liked == true) {
                if (clicked == 1) {
                    reelIcon2.classList.remove("fa-solid")
                    reelIco2.innerText-- - 1;
                    liked = false
                    clicked = 0
                } else {
                    reelIcon2.classList.add("fa-solid")
                    reelLike.style.opacity = "0.5"
                    reelIco2.innerText++ + 1;
                    clicked = 1
                    setTimeout(() => {
                        reelLike.style.opacity = "0"
                    }, 1000);
                }
            } else {
                if (clicked == 1) {
                    reelIcon2.classList.remove("fa-solid")
                    reelIco2.innerText-- - 1;
                    liked = false
                    clicked = 0
                } else {
                    reelIcon2.classList.add("fa-solid")
                    reelLike.style.opacity = "0.5"
                    reelIco2.innerText++ + 1;
                    clicked = 1
                    setTimeout(() => {
                        reelLike.style.opacity = "0"
                    }, 1000);
                }
            }
        })
    }

    getReel()
}
reel()