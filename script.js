document.querySelector("#generate-random").addEventListener("click", generate);
function generate() {
    let randomNumber = Math.floor(1000 + Math.random()*9000);
    document.querySelector("#random-pin").value = randomNumber;
};
document.querySelector("#btn-1").addEventListener("click", write1);
function write1() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "1";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "1";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-2").addEventListener("click", write2);
function write2() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "2";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "2";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-3").addEventListener("click", write3);
function write3() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "3";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "3";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-4").addEventListener("click", write4);
function write4() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "4";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "4";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-5").addEventListener("click", write5);
function write5() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "5";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "5";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-6").addEventListener("click", write6);
function write6() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "6";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "6";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-7").addEventListener("click", write7);
function write7() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "7";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "7";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-8").addEventListener("click", write8);
function write8() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "8";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "8";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-9").addEventListener("click", write9);
function write9() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "9";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "9";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-0").addEventListener("click", write0);
function write0() {
    if (document.querySelector("#pin-box").value == "") {
        document.querySelector("#pin-box").value = "0";
    }
    else {
        let pinboxValue = document.querySelector("#pin-box").value;
        let finalValue = pinboxValue + "0";
        document.querySelector("#pin-box").value = parseInt(finalValue);
    }
}
document.querySelector("#btn-clear").addEventListener("click", clear);
function clear(){
    document.querySelector("#pin-box").value = "";
}
document.querySelector("#btn-backspace").addEventListener("click", trimLast);
function trimLast(){
    if(document.querySelector("#pin-box").value == ""){
        console.log("Nothing In Box")
    }
    else{
        let pin = document.querySelector("#pin-box").value;
        pin = pin.substring(0, pin.length - 1);
        document.querySelector("#pin-box").value = pin;
    }
}
document.querySelector(".submit-btn").addEventListener("click", match);
function match(){
    if(document.querySelector("#pin-box").value == document.querySelector("#random-pin").value){
        document.querySelector(".notify-correct").style.display = "block";
        document.querySelector(".notify-wrong").style.display = "none";
    }
    else{
        document.querySelector(".notify-wrong").style.display = "block";
        document.querySelector(".notify-correct").style.display = "none";
        document.querySelector("#left-chance").innerHTML = parseInt(document.querySelector("#left-chance").innerText - 1);
    }
    if(document.querySelector("#left-chance").innerText != 0){
        console.log("Good")
    }
    else{
        document.querySelector(".submit-btn").setAttribute("disabled", "");
        document.querySelector(".submit-btn").style.backgroundColor = "gray";
    }
}