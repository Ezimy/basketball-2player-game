let p1 = 0
let p2 = 0
document.getElementById("p1-el").textContent = p1
document.getElementById("p2-el").textContent = p2
function incrementp1by1(){
    p1 +=1
    document.getElementById("p1-el").textContent = p1
    updateScores()
}
function incrementp2by1(){
    p2 +=1
    document.getElementById("p2-el").textContent = p2
    updateScores()
}
function incrementp1by2(){
    p1 +=2
    document.getElementById("p1-el").textContent = p1
    updateScores()    
}

function incrementp2by2(){
    p2 +=2
    document.getElementById("p2-el").textContent = p2
    updateScores()
}
function incrementp1by3(){
    p1 +=3
    document.getElementById("p1-el").textContent = p1
    updateScores()
}
function incrementp2by3(){
    p2 +=3
    document.getElementById("p2-el").textContent = p2
    updateScores()
}
function reset(){
    p1=0
    p2=0
    document.getElementById("p1-el").textContent = p1
    document.getElementById("p2-el").textContent = p2
    updateScores()
}
function updateScores() {
    document.getElementById("p1-el").textContent = p1;
    document.getElementById("p2-el").textContent = p2;

    if (p1 > p2) {
        document.getElementById("p1-el").style.color = "red";
        document.getElementById("p2-el").style.color = "#F94F6D";
    } else if (p2 > p1) {
        document.getElementById("p1-el").style.color = "#F94F6D";
        document.getElementById("p2-el").style.color = "red";
    }
    else{
        document.getElementById("p1-el").style.color = "#F94F6D";
        document.getElementById("p2-el").style.color = "#F94F6D";
    }
}
function checkWinner(){
    if (p1 > p2) {
        document.getElementById("win-el").textContent = "p1 win"
        reset()
    } else if (p2 > p1) {
        document.getElementById("win-el").textContent = "p2 win"
        reset()
    }
    else{
        document.getElementById("win-el").textContent = "tie"
        reset()
    }
}

