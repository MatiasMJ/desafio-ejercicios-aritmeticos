const n1 = prompt  ("Ingresa primer número")
const n2 = prompt  ("Ingresa segundo número, distinto al anterior");

if (n1 == n2 || n1 == 0 || n2 == 0) {
    alert ("Los números ingresados no pueden ser iguales, ni tampoco 0")
}

else{
    
    //suma
    
    let suma = Number(n1) + Number(n2);
    
    //resta
    
    let resta = Number(n1) - Number(n2);
    
    //multiplicacion
    
    let multiplicacion = Number(n1) * Number(n2);
    
    //division
    
    let division = Number(n1) / Number(n2);
    
    //modulo
    
    let modulo = Number (n1) % Number (n2);
    
    
    document.write("El resultado de la suma es "+ suma +"<br>");
    document.write("El resultado de la resta es "+ resta +"<br>");
    document.write("El resultado de la multiplicación es "+ multiplicacion +"<br>");
    document.write("El resultado de la division es "+ division +"<br>");
    document.write("El el porcentaje es: " + modulo + "%")
}

