function switchOff(){
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("heading").textContent = "switched Off";
    document.getElementById("switchOn").style.backgroundColor ="#22c55e";
    document.getElementById("switchOff").style.backgroundColor ="#cbd2d9";
}
function switchOn(){
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").textContent = "switched On";
    document.getElementById("switchOn").style.backgroundColor ="#cbd2d9";
    document.getElementById("switchOff").style.backgroundColor ="#e12d39";
}