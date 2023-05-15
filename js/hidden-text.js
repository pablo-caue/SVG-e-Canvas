var hiddenBodySvg = document.querySelector(".hidden-body-svg")
var hiddenBodyCanvas = document.querySelector(".hidden-body-canvas")
var btSvg = document.querySelector(".bt-svg");
var btCanvas = document.querySelector(".bt-canvas")
var paddingSvg = document.querySelector(".section-hidden-svg");
var paddingCanvas = document.querySelector(".section-hidden-canvas");

function leiaMaisSvg() {
    if (hiddenBodySvg.style.display == "inline") {
        hiddenDivs()
        moveToSvg()
    } else {
        showDivs()
    }
}

function leiaMaisCanvas() {
    if (hiddenBodyCanvas.style.display == "inline") {
        hiddenDiv()
        moveToCanvas()  
        paddingSvg.style.marginTop = "1rem"
        if (hiddenBodySvg.style.display == "inline"){
            hiddenBodySvg.style.display = "none"
        }
    } else {
        showDiv()
        upBtSvgAfterCanvas()
        paddingSvg.style.marginTop = "7.5rem"
    }
}

function hiddenDivs() {
    upBtSvg()
    upBtCanvas()
    hiddenSvg()
    hiddenCanvas()
}

function showDivs() {
    downBtCanvasSvg()
    downBtSvg()
    showSvg()
    showCanvas()
}

function hiddenDiv() {
    upBtSvg()
    upBtCanvas()
    hiddenCanvas()
}

function showDiv() {
    downBtCanvas()
    downBtSvg()
    showCanvas()
}

function moveToSvg() {
    window.scrollTo({
        top: 1200,
        left: 0,
        behavior: "instant"
    })
}

function moveToCanvas() {
    window.scrollTo({
        top: 2600,
        left: 0,
        behavior: "instant"
    })
}

function moveToCanvasBefore() {
    window.scrollTo({
        top: 2400,
        left: 0,
        behavior: "instant"
    })
}
function showSvg() {
    btSvg.innerHTML = "Leia menos"
    hiddenBodySvg.style.display = "inline"
    paddingSvg.style.marginTop = "142rem"
}

function hiddenCanvas() {
    btSvg.innerHTML = "Leia mais"
    hiddenBodyCanvas.style.display = "none"
    paddingCanvas.style.marginTop = "1rem"
}

function showCanvas() {
    btCanvas.innerHTML = "Leia menos"
    hiddenBodyCanvas.style.display = "inline"
    paddingCanvas.style.marginTop = "120rem"
}

function hiddenSvg() {
    btSvg.innerHTML = "Leia mais"
    hiddenBodySvg.style.display = "none"
    paddingSvg.style.marginTop = "1rem"
}


function upBtSvg() {
    btSvg.style.removeProperty("position")
    btSvg.style.removeProperty("top")
}

function upBtSvgAfterCanvas(){
    btSvg.style.top = "87rem"
}

function downBtSvg() {
    btSvg.style.position = "absolute"
    btSvg.style.top = "226rem"
}

function upBtCanvas() {
    btCanvas.style.top = "178rem"
}
function downBtCanvasSvg() {
    btCanvas.style.top = "435rem"
}
function downBtCanvas() {
    btCanvas.style.top = "300rem"
}
