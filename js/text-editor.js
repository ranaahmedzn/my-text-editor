// common function
function getTextarea(id) {
    const textareaField = document.getElementById(id);
    return textareaField;
}
function buttonColor(event){
    event.target.classList.toggle('bg-color')
    event.target.classList.toggle('text-color')
}
function buttonColor2(event){
    for(const element of event.target.parentNode.children){
        if(element.classList.contains('bg-color'))
        element.classList.remove('bg-color')
        element.classList.remove('text-color')
    }
    event.target.classList.add('bg-color');
    event.target.classList.add('text-color');
}


//work with font style
document.getElementById('bold-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    // textareaField.style.fontWeight = 'bold';
    textareaField.classList.toggle('bold');
    buttonColor(e);
})


document.getElementById('italic-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    textareaField.classList.toggle('italic');
    buttonColor(e);
})

document.getElementById('underline-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    textareaField.classList.toggle('underline');
    buttonColor(e);
})


// work with text alignment
document.getElementById('left-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    textareaField.style.textAlign = 'left';
    buttonColor2(e);
})

document.getElementById('center-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    textareaField.style.textAlign = 'center';
    buttonColor2(e);
})

document.getElementById('right-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    textareaField.style.textAlign = 'right';
    buttonColor2(e);
})

document.getElementById('justify-icon').addEventListener('click', function (e) {
    const textareaField = getTextarea('textarea-field');
    textareaField.style.textAlign = 'justify';
    buttonColor2(e);
})


// work with font size
document.getElementById('font-size-field').addEventListener("keypress", function (event) {
    const textareaField = getTextarea('textarea-field');
    const fontSizeFieldValue = document.getElementById('font-size-field').value;
    if (event.key === "Enter") {
        textareaField.style.fontSize = `${fontSizeFieldValue}px`;
    }
});


// work with text color 
document.getElementById('color-field').addEventListener('change', function () {
    const textareaField = getTextarea('textarea-field');
    const colorFieldValue = document.getElementById('color-field').value;
    textareaField.style.color = colorFieldValue;
})