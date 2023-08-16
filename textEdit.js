
// blod the text using button
let isBold = false;
document.getElementById('bold-btn').addEventListener('click',function() {
    let inputField = document.getElementById('input-field');
    if (isBold) {
        inputField.style.fontWeight = "normal"; 
    } else {
        inputField.style.fontWeight = "bold"; 
    }
    isBold = !isBold;
})

// italic the text using button
document.getElementById('itlic-btn').addEventListener('click',function() {
    let inputField = document.getElementById('input-field');
    if (isBold) {
        inputField.style.fontStyle = "normal"; 
    } else {
        inputField.style.fontStyle = "italic"; 
    }
    isBold = !isBold;
})

// underline the text using button

document.getElementById('underLine-btn').addEventListener('click',function() {
    let inputField = document.getElementById('input-field');
    // inputField.style.textDecoration = "underline";
    if (isBold) {
        inputField.style.textDecoration = "none"; 
    } else {
        inputField.style.textDecoration = "underline"; 
    }
    isBold = !isBold; 
})

// left the text using button

document.getElementById('left-btn').addEventListener('click',function() {
    let inputField = document.getElementById('input-field');
    inputField.style.textAlign = "left"; 
})

// center the text using button

document.getElementById('center-btn').addEventListener('click',function() {
    let inputField = document.getElementById('input-field');
    inputField.style.textAlign = "center"; 
})

// right the text using button

document.getElementById('right-btn').addEventListener('click',function() {
    let inputField = document.getElementById('input-field');
    inputField.style.textAlign = "right"; 
})

// change the colour using the color input

document.getElementById('colorPicker').addEventListener('input',function() {
    let colorPicker = document.getElementById("colorPicker");
    let selectedColor = colorPicker.value;
    let inputField = document.getElementById('input-field');
    inputField.style.color = selectedColor;
})

//change the text size using the number input
document.getElementById("size-Input").addEventListener("input", function () {
    const numberInput = document.getElementById('size-Input');
    const textSize = numberInput.value + "px";
    let inputField = document.getElementById('input-field');
    inputField.style.fontSize = textSize;
})