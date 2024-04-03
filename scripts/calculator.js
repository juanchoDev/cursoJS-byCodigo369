const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick=()=>{
        if (item.id == "clear"){
            display.innerText = ""
        } else if (item.id == "backspace"){
            let string = display.innerHTML.toString();
            display.innerText = string.substring(0,string.length-1)
        } else if (display.innerText != "" && item.id =="equal") {
             display.innerHTML = eval(display.innerHTML);
        } else if (display.innerHTML == "" && item.id == "equal") {
            display.innerText="Null";
            setTimeout(() => (display.innerHTML = ""), 2000)
        } else {
            display.innerText+=item.innerText;
        }
    };
});

/* DARK THEME */

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const containerDark = document.getElementById("container");

/* FUNCION QUE CAMBIA ESTILOS AL HACER CLICK EN TOGGLE */

let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");

    if (containerDark.classList.contains("containerLight")){
        containerDark.classList.remove("containerLight")
    } else {
        containerDark.classList.add("containerLight")
    }

    isDark=!isDark;
}


