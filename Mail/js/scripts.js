console.log('int ok')

// console.log('emailLIst', emailList, typeof emailList);

const emailList = ['bello','prova','gino@email.it','alice@email.it','giorgio@email.it','roberto@email.it','ciao'];
let emailInput = prompt('Inserisci la tua email');


let messaggio;
for(let i = 0 ; i < emailList.length ; i++ ){
    //console.log(i);
    //console.log(emailList[i]);
    if(emailInput == emailList[i]){
        messaggio = 'funziona';
        i = emailList.length;
        //console.log(messaggio);
        //console.log('messaggio finale',messaggio);
    }
    else if(emailInput != emailList[i]){
        messaggio = 'non funziona';
        //console.log(messaggio);
        //console.log('messaggio finale',messaggio);
    }
}
//console.log('fuori for',emailList[i]);
console.log('messaggio finale',messaggio);



