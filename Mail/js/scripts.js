console.log('int ok')

// console.log('emailLIst', emailList, typeof emailList);

const emailList = ['gino@email.it','alice@email.it','giorgio@email.it','roberto@email.it','ciao'];
let emailInput = prompt('Inserisci la tua email');


let messaggio;
for(let i = 0 ; i < emailList.length ; i++ ){
    //console.log(i)
    //console.log(emailList[i])
    if(emailInput == emailList[i]){
        messaggio = 'funziona'
    }
    else if(emailInput == emailList.length){
        messaggio = 'non funziona'
    }
}
//console.log('fuori for',emailList[i]);
console.log(messaggio);



