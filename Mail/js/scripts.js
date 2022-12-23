console.log('int ok')

// console.log('emailLIst', emailList, typeof emailList);   //debug

const emailList = ['bello','prova','gino@email.it','alice@email.it','giorgio@email.it','roberto@email.it','ciao'];
let emailInput = prompt('Inserisci la tua email');


let messaggio;
for(let i = 0 ; i < emailList.length ; i++ ){
    //console.log(i);   //debug
    //console.log(emailList[i]);   //debug
    if(emailInput == emailList[i]){
        messaggio = 'funziona';
        i = emailList.length;
        //console.log(messaggio);   //debug
        //console.log('messaggio finale',messaggio);   //debug
    }
    else if(emailInput != emailList[i]){        //funziona anche con solo else, ma per sicurezza mantengo else if con la condizione
        messaggio = 'non funziona';
        //console.log(messaggio);   //debug
        //console.log('messaggio finale',messaggio);   //debug
    }
}
//console.log('fuori for',emailList[i]);   //debug
console.log('messaggio finale',messaggio);



