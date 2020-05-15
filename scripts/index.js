// 实现页面显示跳转至锚点
function scrollToAnchor(id) {
    const target = document.getElementById(id);
    target.scrollIntoView();
}

var navId;

window.onload = function () {
    this.navId = document.getElementById("nav");
    console.log(this.navId)
    isNavDisplay();
}

window.onresize = function () {
    isNavDisplay();
};

function isNavDisplay() {
    if (window.innerWidth > 900) {
        this.navId.style.display = "flex";
    } else {
        this.navId.style.display = "none";
    }
}