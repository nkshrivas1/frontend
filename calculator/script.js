let display  = document.getElementById("display")
console.log(" ~ :2 ~ display:", display)

function appendValue(value){
    if(display.value==0 || display.value=="Invalid")
        clearValue();
    display.value += value;
}

function clearValue(){
    display.value = "";
}
function removeLast(){
    display.value =  display.value.slice(0,-1);
}
function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Invalid"
        console.log(error);
    }
}