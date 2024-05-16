function sim(){
    alert("É sempre um prazer fazer negócio com você!");

}
function sai(t){
    var joga = t
    console.log("!saiiiii");
    document.getElementById("nao");
    joga.style.position = "absolute";
    joga.style.bottom = randomNum(10, 90);
    joga.style.left = randomNum(10, 90);

}
function randomNum(min, max){
    return (Math.random() * (max - min) + min) + "%";

}

