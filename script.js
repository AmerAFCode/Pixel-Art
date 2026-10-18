let penColor="black";
let currentColor;

function setPenColor(penDiv) {
    penColor= penDiv.style.backgroundColor
    currentColor.style.backgroundColor = penColor.style.backgroundColor
}
function setPixelColor(pixelDiv) {
    pixelDiv.style.backgroundColor=penColor;
    current = penColor
    document.getElementById("current-pixel-color").style.backgroundColor=current;
}