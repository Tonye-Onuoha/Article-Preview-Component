const articleInfo = document.querySelector(".article-info");
const articleShareMobile = document.querySelector(".article-share");
const articleShareDesktop = document.getElementById("pop-up");
const shareContainer = document.querySelector(".share-container");
const desktopShareButton = document.querySelector(".button-1 > img");
const mobileShareButton = document.querySelector(".button-2 > img");

desktopShareButton.addEventListener("click", (e) => {
    if (window.outerWidth >= 850 && e.currentTarget.style.backgroundColor == "rgb(236, 242, 248)") {
        desktopShareButton.style.backgroundColor = "rgb(158, 175, 194)";
        articleShareDesktop.style.display = "flex";
    } else if (window.outerWidth >= 834 && e.currentTarget.style.backgroundColor == "rgb(158, 175, 194)") {
        desktopShareButton.style.backgroundColor = "rgb(236, 242, 248)";
        articleShareDesktop.style.display = "none";
    } else {
        articleInfo.style.display = "none";
        articleShareMobile.style.display = "flex";
        shareContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
    }
});
mobileShareButton.addEventListener("click", () => {
    articleInfo.style.display = "flex";
    articleShareMobile.style.display = "none";
    shareContainer.style.backgroundColor = "#ffffff";
});
