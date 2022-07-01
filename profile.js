const alertColor = () => {
    alert("Green!")
}

const alertPlace = () => {
    alert("Anywhere warm.")
}

const alertRitual = () => {
    alert("Reading before bed.")
}

document.getElementById('color').addEventListener("click", alertColor)
document.getElementById("place").addEventListener("click", alertPlace)
document.getElementById("ritual").addEventListener("click", alertRitual)