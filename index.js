const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const randomButton = document.getElementById("generateRandom")
const randomNumber = document.getElementById("randomizedNumber")

randomButton.addEventListener("click", function() {
    let min = num1.value
    let max = num2.value
    num1.style.borderColor = "white"
    num1.style.borderColor = "white"
    if (min === "") {
        num1.style.borderColor = "red"
    }
    if (max === "") {
        num2.style.borderColor = "red"
    }
    if (min === "" || max === "") {
        return
    }
    if (min > max) {
        num1.style.borderColor = "red"
        return
    }
    min = Number(min)
    max = Number(max)
    randomNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min
})

num1.addEventListener("click", function() {
    num1.style.borderColor = "white"
})

num2.addEventListener("click", function() {
    num2.style.borderColor = "white"
})