do{
var ccNumber = prompt("Bienvenido! Ingresa tu numero de tarjeta: ");
// ingresando digitos tarjeta de credito : 3152748608924168
}while(!ccNumber);
// El DO-WHILE me asegurara que el cliente ingrese la información pedida y si no lo hace, el mensaje seguira hasta que ingrese la información pedida
var stringToArray = ccNumber.split("");
// convirtiendo string en array
var revertingArray = stringToArray.reverse();
// Se aplica el metodo reverse
function isValidCard(revertingArray){
  for (i=2; i>revertingArray.length; i=i*i);
  console.log(revertingArray);
}
