//console.log('int ok') //debug

const emailList = ['bello','prova','gino@email.it','alice@email.it','giorgio@email.it','roberto@email.it','ciao'];
//let emailInput = prompt('Inserisci la tua email');
let messaggio;
const inputEmail = document.getElementById('input-email');
//console.log('inputEmail',inputEmail.value, typeof inputEmail.value);    //debug
let emailInput;
const buttonSubmit = document.getElementById('button-submit')

/*
buttonSubmit.addEventListener('click',  //metodo 1 non ottimale

    function(){
        emailInput = inputEmail.value;
        //console.log('emailInput',emailInput, typeof emailInput);  //debug
         //metodo 1 non ottimale
        for(let i = 0 ; i < emailList.length ; i++ ){
            //console.log(emailList[i])   //debug
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
    }

)
*/

buttonSubmit.addEventListener('click',

    function(){
        emailInput = inputEmail.value;
        //metodo 2 ottimale
        messaggio = 'la tua email non è autorizzata';
        for(let i = 0 ; i < emailList.length ; i++ ){
            //console.log(i);   //debug
            //console.log(emailList[i]);   //debug
            if(emailInput == emailList[i]){
                messaggio = 'la tua email è stata verificata con successo';
                //console.log(messaggio);   //debug
                //console.log('messaggio finale',messaggio);   //debug
            }
        }
        //console.log('fuori for',emailList[i]);   //debug
        console.log('messaggio finale:',messaggio);
        alert(messaggio);

    }
)



