console.log('int ok')

const emailList = ['bello','prova','gino@email.it','alice@email.it','giorgio@email.it','roberto@email.it','ciao'];
let emailInput = prompt('Inserisci la tua email');
let messaggio;
const inputEmail = document.getElementById('input-email');
console.log('inputEmail',inputEmail, typeof inputEmail);

 //metodo 1 non ottimale
for(let i = 0 ; i < emailList.length ; i++ ){

    if(emailInput == emailList[i]){
        messaggio = 'la tua email è stata verificata con successo';
        i = emailList.length;
    }
    else if(emailInput != emailList[i]){        //funziona anche con solo else, ma per sicurezza mantengo else if con la condizione
        messaggio = 'la tua email non è autorizzata';

    }
}
console.log('messaggio finale',messaggio);
alert(messaggio);

