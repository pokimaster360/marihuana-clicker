let scoreN = document.getElementById("score-number")
let marihuana = document.querySelector("#container")
let btnCursor = document.getElementById("cursorBtn")
let score = 0

let cursor = {
    precio: 15,
    marihuanaPs: 0,
    marihuanaPcursor: 0.1,
    ttlCursores: 0,
    comprado: false,
}

let click = {
    marihuanaPc: 1,
    nivel: 1,
}

const marihuanaClick = () => {
    score += click.marihuanaPc
}

const cursorUpdate = () => {
    if(score >= cursor.precio){
        score = score-cursor.precio
        cursor.ttlCursores++
        cursor.precio = (cursor.precio*1.15).toFixed(0)
        document.getElementById("cursorBtn-precio").innerHTML = cursor.precio

        if(cursor.ttlCursores > 0){
            cursor.marihuanaPs += cursor.marihuanaPcursor
        }

        if(cursor.comprado == false){
            cursor.comprado = true
            cursorClicks()
        }
    }
    else{
        console.log("no tienes marihuanas suficientes")
    }
    function cursorClicks(){
        score += cursor.marihuanaPs
        setTimeout(cursorClicks, 1000)
    }
}

function scoreActualizador(){
    if(score >= 1000000){
        scoreN.innerText = (score/1000).toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits: 3}) + " millon"
    }
    if(score < 1000000){
    scoreN.innerText = score.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits: 1});
    document.title = score.toLocaleString(undefined,{minimumFractionDigits: 0, maximumFractionDigits: 1}) + " marihuanas"
    }
    setTimeout(scoreActualizador, 10)
}

function mejora(){
    cursor.marihuanaPcursor *= 2
    cursor.marihuanaPs *= 2
    console.log(cursor)
}

scoreActualizador()
btnCursor.addEventListener("click", cursorUpdate)
btnCursor.addEventListener("click", mejora)
marihuana.addEventListener("click", marihuanaClick)
