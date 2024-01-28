function story() {
    var storyArr = [
        { dp: "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { dp: "https://images.unsplash.com/photo-1506782081254-09bcfd996fd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1687294573673-ad2c5c370582?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1667533288519-49d00a1620b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { dp: "https://images.unsplash.com/photo-1705642126091-f6a72397a183?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1705773335937-17e1ff6fac10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ]


    let stories = document.querySelector(".stories .otherStories")
    let storyFill = document.querySelector(".stories .story-fill")
    let storyBar = document.querySelector(".stories .story-fill .storyBar")
    let storyFilled = document.querySelector(".stories .story-fill .storyFilled")

    clutter = ""
    storyArr.forEach(function (elem, idx) {
        clutter += `<div class="Story">
        
        <img id="${idx} "src="${elem.dp}" alt="${elem.story}">
        </div>`
    })

    stories.addEventListener("click", function (data) {
        let targetStory = data.target.alt
        storyFill.style.display = "flex"
        storyBar.style.display = "block"
        storyFilled.style.backgroundImage = `url(${targetStory})`
        setTimeout(() => {
            storyFill.style.display = "none"
        }, 4000);


    })
    stories.innerHTML = clutter
}

story()

function post() {
    let screenLike = document.querySelectorAll(".photos .screenLike i");
    let photoImg = document.querySelectorAll(".photos .photoImg img");
    let photosI = document.querySelectorAll(".photoI i");
    let photosI2 = document.querySelectorAll(".photoI i2");
    let photosP = document.querySelectorAll(".photos p");
    let photosP2 = document.querySelectorAll(".photos p2");

    photosP.forEach((pElement) => {
        let pLike = pElement;
        pElement.innerHTML = Math.floor(Math.random() * 10000);
        pLike.innerText = parseInt(pLike.innerText) + 1;
    });

    photosP2.forEach((p2Element) => {
        p2Element.innerHTML = Math.floor(Math.random() * 1000);
    });

    photosI.forEach((photoLike, index) => {
        let liked = 0;
        let pLike = photosP[index];

        photoLike.addEventListener("click", function () {
            if (liked === 0) {
                photoLike.classList.toggle("fa-solid");
                pLike.innerText = parseInt(pLike.innerText) + 1;
                liked = 1;
                photoLike.style.transform = "scale(1.1)"
                setInterval(() => {
                    photoLike.style.transform = "scale(1)"
                }, 100);
                screenLike.forEach((screen) => {
                    screen.style.opacity = "0.5"
                    setTimeout(() => {
                        screen.style.opacity = "0"
                    }, 1200)
                })
            } else {
                photoLike.classList.toggle("fa-solid");
                pLike.innerText = parseInt(pLike.innerText) - 1;
                liked = 0;
            }
        });
        photoImg.forEach((likeEvent) => {
            if (liked === 0) {
                likeEvent.addEventListener("dblclick", function () {
                    pLike.innerText = parseInt(pLike.innerText) + 1;
                    photoLike.classList.toggle("fa-solid");
                    screenLike.forEach((screen) => {
                        screen.style.opacity = "0.5"
                        setTimeout(() => {
                            screen.style.opacity = "0"
                        }, 1200)
                    })
                })
                liked = 1;
            } else {
                photoLike.classList.toggle("fa-solid");
                pLike.innerText = parseInt(pLike.innerText) - 1;
                liked = 0;
            }

        })
});

photosI2.forEach((photoPlane) => {
    photoPlane.addEventListener("mousemove", function () {
        photoPlane.classList.remove("fa-regular")
        photoPlane.classList.add("fa-solid");
    })
    photoPlane.addEventListener("mouseleave", function () {
        photoPlane.classList.add("fa-regular")
        photoPlane.classList.remove("fa-solid")
    })
})


window.addEventListener("scroll", function (event) {
    scrollable = document.documentElement.scrollHeight - window.innerHeight;
    scrollend = window.scrollY;

    if (Math.ceil(scrollend) === (scrollable)) {
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
            "modelling",
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
        let wordArr = Math.floor(Math.random() * arr.length)

        function getRandomSize() {
            const size = [
                'contain', 'cover',
            ];

            const randomSize = size[Math.floor(Math.random() * size.length)];
            return randomSize;
        }
        function getRandomFilter() {
            const filters = [
                'grayscale(100%)',
                'sepia(10%)',
                'brightness(50%)',
                'contrast(150%)',
            ];

            const randomFilter = filters[Math.floor(Math.random() * filters.length)];
            return randomFilter;
        }

        let photos = "https://source.unsplash.com/random/?" + arr[wordArr];
        let createPhoto = document.querySelector(".photos");
        let photoSec = document.createElement("div"); // Create a new div element
        photoSec.classList.add("photoSec"); // Add the "photoSec" class to the new div

        let screenLike = document.createElement("div");
        screenLike.classList.add("screenLike");

        let screenElement = document.createElement("i");
        screenElement.classList.add("fa-solid", "fa-heart", "photoLike");

        screenLike.appendChild(screenElement)
        photoSec.appendChild(screenLike)

        // Create the photoImg div
        let photoImgDiv = document.createElement("div");
        photoImgDiv.classList.add("photoImg");

        // Create the img element
        let imgElement = document.createElement("img");
        imgElement.src = photos;
        imgElement.style.objectFit = getRandomSize();
        imgElement.style.filter = getRandomFilter();

        // Append the img element to the photoImg div
        photoImgDiv.appendChild(imgElement);

        // Create the photoI div
        let photoIDiv = document.createElement("div");
        photoIDiv.classList.add("photoI");
        // Create the heart icon and count
        let heartIcon = document.createElement("i");
        heartIcon.classList.add("fa-regular", "fa-heart", "photoLike");

        let heartCount = document.createElement("p");
        const heartIconText = Math.floor(Math.random() * 10000);
        heartCount.textContent = heartIconText;

        // Function to set up click event listener for the heart icon and count
        function setupHeartClick() {
            let liked = 0;
            let pLike = heartCount;

            heartIcon.addEventListener("click", function () {
                if (liked === 0) {
                    heartIcon.classList.toggle("fa-solid");
                    pLike.textContent = parseInt(pLike.textContent) + 1;
                    liked = 1;
                    heartIcon.style.transform = "scale(1.1)"
                    setInterval(() => {
                        heartIcon.style.transform = "scale(1)"
                    }, 100);
                    screenElement.style.opacity = "0.5"
                    setTimeout(() => {
                        screenElement.style.opacity = "0"
                    }, 1000)

                } else {
                    heartIcon.classList.toggle("fa-solid");
                    pLike.textContent = parseInt(pLike.textContent) - 1;
                    liked = 0;
                }
            });
        }

        // Call the function with an index (you can pass the appropriate index)
        setupHeartClick(0);

        // Append the heart icon and count to the photoI div
        photoIDiv.appendChild(heartIcon);
        photoIDiv.appendChild(heartCount);

        // Create the paper-plane icon and count
        let paperPlaneIcon = document.createElement("i2");
        paperPlaneIcon.classList.add("fa-regular", "fa-paper-plane", "photoSend");
        let paperPlaneCount = document.createElement("p2");
        const paperPlaneText = Math.floor(Math.random() * 1000);
        paperPlaneCount.textContent = paperPlaneText;

        paperPlaneIcon.addEventListener("mousemove", function () {
            paperPlaneIcon.classList.remove("fa-regular")
            paperPlaneIcon.classList.add("fa-solid")
        })
        paperPlaneIcon.addEventListener("mouseleave", function () {
            paperPlaneIcon.classList.add("fa-regular")
            paperPlaneIcon.classList.remove("fa-solid")
        })

        // Append the paper-plane icon and count to the photoI div
        photoIDiv.appendChild(paperPlaneIcon);
        photoIDiv.appendChild(paperPlaneCount);

        // Append the photoImg and photoI divs to the photoSec div
        photoSec.appendChild(photoImgDiv);
        photoSec.appendChild(photoIDiv);

        // Append the photoSec div to the createPhoto element
        createPhoto.appendChild(photoSec);

    }
})
}

post();