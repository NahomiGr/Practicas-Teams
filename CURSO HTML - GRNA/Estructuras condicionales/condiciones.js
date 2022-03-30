var mensaje='Switch:  0 = Lunes, 1=Martes'
var day=prompt(mensaje);
document.write(day);

switch (day) {
    case ("0"):
        alert('Lunes');
      break;
    case ("1"):
        alert('Martes');
      break;
    default:
        text = "No value found";
  }

  var mensaje='IF: Ingrese un numero'
  var num=prompt(mensaje);

  if (num < 10) {
    alert('El numero es menor a 10');
  }


 
  var mensaje='ELSE IF: Ingrese un numero'
  var num=prompt(mensaje);

  if (num < 10) {
    alert('El numero es menor a 10');
  } 
  else {
    alert('El numero es mayor a 10');
  }