let display = document.getElementById("display");

function appendvalue(value){
    display.value = display.value + value;
}
function clearDisplay (){
    display.value = " ";
}
function calulate() {
    display.value = eval(display.value);
} 