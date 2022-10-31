var txtInput = document.querySelector("#txt-input");
var clickBtn = document.querySelector("#click-btn");
var output = document.querySelector("#output-text");

clickBtn.disabled = true;

function onChangeHandler() {
    if (txtInput.value.length < 10) {
        clickBtn.disabled = true
        txtInput.style.outline = "none"
            //Meth 1
            //txtInput.style.border = "2px solid red"

        //Meth 2
        //txtInput.classList.add("border-red")

        //Meth 3
        txtInput.className = "border-red"
    } else {
        clickBtn.disabled = false;
        //Meth 1
        //txtInput.style.border = "2px solid green"

        //Meth 2
        //txtInput.classList.remove("border-red");
        //txtInput.classList.add("border-green")

        //Meth 3
        txtInput.className = "border-green"
    }
}

txtInput.addEventListener('keyup', onChangeHandler)

function clickHandler() {
    if (txtInput.value.length < 10) {
        output.innerText = "Error"
    } else {
        output.innerText = "success"
    }
}

clickBtn.addEventListener('click', clickHandler)