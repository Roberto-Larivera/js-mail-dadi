console.log('int ok')

let giocatoreUno = Math.ceil(Math.random() * 6);
let giocatoreDue = Math.ceil(Math.random() * 6);
console.log('Il dado del giocatore 1 è uscito: ',giocatoreUno);
console.log('Il dado del giocatore 2 è uscito: ',giocatoreDue);

if (giocatoreUno > giocatoreDue){
    console.log('Ha vinto il giocatore 1!')
}
else if (giocatoreUno < giocatoreDue) {
    console.log('Ha vinto il giocatore 2!')
}
else{
    console.log('Pareggio!!!')

}




// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }
// const outCodiceCp = getRandomInt(1,7);
// console.log('outCodiceCp', outCodiceCp, typeof outCodiceCp);