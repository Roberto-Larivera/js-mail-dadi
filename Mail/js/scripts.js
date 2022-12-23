console.log('int ok')

// console.log('emailLIst', emailList, typeof emailList);   //debug
const emailList = ['bello','prova','gino@email.it','alice@email.it','giorgio@email.it','roberto@email.it','ciao'];
let emailInput = prompt('Inserisci la tua email');


/* //metodo 4 migliore lavorativo
const verificaEmail = emailList.includes(emailInput);
if(verificaEmail == true){
    console.log('la tua email è stata verificata con successo');
    alert('la tua email è stata verificata con successo');
}
else{
    console.log('la tua email non è autorizzata');
    alert('la tua email non è autorizzata');
  }
*/



 /* //metodo 3 ottimale Booleano
  let verifica = false;
  for(let i = 0 ; i < emailList.length ; i++ ){
      //console.log(i);   //debug
      //console.log(emailList[i]);   //debug
      if(emailInput == emailList[i]){
          verifica = true ;
          //console.log(messaggio);   //debug
          //console.log('messaggio finale',messaggio);   //debug
      }
  }
  if(verifica == true){
    console.log('la tua email è stata verificata con successo');
    alert('la tua email è stata verificata con successo');
  }
  else{
    console.log('la tua email non è autorizzata');
    alert('la tua email non è autorizzata');
  }
*/








  //metodo 2 ottimale
let messaggio = 'la tua email non è autorizzata';
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
console.log('messaggio finale',messaggio);
alert(messaggio);







/*  //metodo 1 non ottimale
let messaggio;
for(let i = 0 ; i < emailList.length ; i++ ){
    //console.log(i);   //debug
    //console.log(emailList[i]);   //debug
    if(emailInput == emailList[i]){
        messaggio = 'la tua email è stata verificata con successo';
        i = emailList.length;
        //console.log(messaggio);   //debug
        //console.log('messaggio finale',messaggio);   //debug
    }
    else if(emailInput != emailList[i]){        //funziona anche con solo else, ma per sicurezza mantengo else if con la condizione
        messaggio = 'la tua email non è autorizzata';
        //console.log(messaggio);   //debug
        //console.log('messaggio finale',messaggio);   //debug

    }
}
//console.log('fuori for',emailList[i]);   //debug
console.log('messaggio finale',messaggio);
alert(messaggio);

*/


