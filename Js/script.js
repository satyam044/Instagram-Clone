function story() {
    var storyArr = [
        { dp: "https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg", story: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg", story: "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg", story: "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_1280.jpg", story: "https://cdn.pixabay.com/photo/2023/04/24/04/23/couple-7947176_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg", story: "https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_1280.jpg", story: "https://cdn.pixabay.com/photo/2018/07/23/06/10/man-3556090_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_1280.jpg", story: "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2016/04/24/20/56/man-1350599_1280.jpg", story: "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_1280.jpg", story: "https://cdn.pixabay.com/photo/2018/07/21/03/55/woman-3551832_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2018/04/03/20/26/woman-3287956_1280.jpg", story: "https://cdn.pixabay.com/photo/2020/03/26/09/08/girl-4969690_1280.jpg" },
        { dp: "https://cdn.pixabay.com/photo/2017/04/25/05/10/romance-2258599_1280.jpg", story: "https://cdn.pixabay.com/photo/2017/11/03/18/26/man-2915187_1280.jpg" },
    ]

    let stories = document.querySelector(".stories .otherStories")
    let storyFill = document.querySelector(".stories .story-fill")
    let storyBar = document.querySelector(".stories .story-fill .storyBar")
    let storyFilled = document.querySelector(".stories .story-fill .storyFilled")
    let storyClose = document.querySelector(".stories .storyFilled i")

    clutter = ""
    
    let usedIndices = [];
    storyArr.forEach(function (elem, idx) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * storyArr.length);
        } while (usedIndices.includes(randomIndex));

        usedIndices.push(randomIndex);

        let sdp = storyArr[randomIndex].dp;

        clutter += `<div class="Story">
        <img id="${idx}" src="${sdp}" alt="${elem.story}">
    </div>`;
    });

    stories.addEventListener("click", function (data) {
        let targetStory = data.target.alt
        storyFill.style.display = "flex"
        storyBar.style.display = "block"
        storyFilled.style.backgroundImage = `url(${targetStory})`
        let clrTimeout = setTimeout(() => {
            storyFill.style.display = "none"
        }, 4000);
        storyClose, storyFilled.addEventListener("click", function () {
            storyFill.style.display = "none"
            clearTimeout(clrTimeout)
        })
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
        pElement.innerHTML = Math.floor(Math.random() * 10000);
    });
    photosP2.forEach((pElement) => {
        pElement.innerHTML = Math.floor(Math.random() * 1000);
    });

    // photosI.forEach((photoLike, idx) => {
    //     let pp = photosP[idx];
    //     let liked = false;

    //     photoLike.addEventListener("click", function () {
    //         if (!liked) {
    //             photoLike.classList.add("fa-solid");
    //             pp.innerText = parseInt(pp.innerText) + 1;

    //             photoLike.style.transform = "scale(1.1)";
    //             setTimeout(() => {
    //                 photoLike.style.transform = "scale(1)";
    //             }, 100);

    //             screenLike.forEach((screen) => {
    //                 screen.style.opacity = "0.5";
    //                 setTimeout(() => {
    //                     screen.style.opacity = "0";
    //                 }, 1200);
    //             });

    //             liked = true;
    //         }
    //         else {
    //             photoLike.classList.remove("fa-solid");
    //             pp.innerText = parseInt(pp.innerText) - 1;
    //             liked = false;
    //         }
    //     })

    // });
    photoImg.forEach((imgElement, index) => {
        let likedE = false;
        imgElement.addEventListener("dblclick", function () {
            if (likedE == false) {
                let pLike = photosP[index];
                photoLike = photosI[index];
                likedE = true;
                liked = true;

                photoLike.classList.add("fa-solid");
                pLike.innerText = parseInt(pLike.innerText) + 1;

                screenLike.forEach((screen) => {
                    screen.style.opacity = "0.5";
                    setTimeout(() => {
                        screen.style.opacity = "0";
                    }, 1200);
                });
            }
            else {
                screenLike.forEach((screen) => {
                    screen.style.opacity = "0.5";
                    setTimeout(() => {
                        screen.style.opacity = "0";
                    }, 1200);
                });
                if (liked == true) {
                    
                }
            }

        });
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