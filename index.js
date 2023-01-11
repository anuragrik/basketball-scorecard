let countHome=0, countGuest=0
document.getElementById("score-home").textContent=countHome
document.getElementById("score-guest").textContent=countGuest
function incOneHome(){
    countHome+=1
    document.getElementById("score-home").textContent=countHome
}
function incTwoHome(){
    countHome+=2
    document.getElementById("score-home").textContent=countHome
}
function incThreeHome(){
    countHome+=3
    document.getElementById("score-home").textContent=countHome
}
function incOneGuest(){
    countGuest+=1
    document.getElementById("score-guest").textContent=countGuest
}
function incTwoGuest(){
    countGuest+=2
    document.getElementById("score-guest").textContent=countGuest
}
function incThreeGuest(){
    countGuest+=3
    document.getElementById("score-guest").textContent=countGuest
}
function newGame(){
    countHome=0
    countGuest=0
    document.getElementById("score-home").textContent=countHome
    document.getElementById("score-guest").textContent=countGuest
}