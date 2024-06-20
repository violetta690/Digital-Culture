const width = window.innerWidth,
height = window.innerHeight;
console.log(width);
var headImage = document.getElementById("head-image");
var headText = document.getElementById("head-text");
var introImage = document.getElementById("intro-img");
var mainImage = document.getElementById("main-idea-img");
if (width >= 1200) {
    headImage.style.height = height * 0.9 + 'px';
    headText.style.fontSize = width / 32 + 'px'
}else{
    headImage.style.height = height * 0.6 + 'px';
    headText.style.fontSize = width / 30 + 'px'
}
if (width<= 780) {
    introImage.style.width = 200 +'px';
    mainImage.style.width = 250 + 'px'
}