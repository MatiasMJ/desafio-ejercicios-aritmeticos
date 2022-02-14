//ejercicio 4
let days = Number(prompt("ingrese numero de dias, para calcular años, semanas y dias "));
console.log("el numero de dias es: ", days);


let year = 0

year = Math.floor( days / 365);
document.write("El número de años es : ", year + "<br>")


let week = 0

week = Math.floor((days -(365 * year)) /7)
document.write("El número de semanas es : ", week + "<br>")


let day = 0

day = Math.floor(days -(365 * year) - (7 * week))
document.write("El número de dias es : ", day + "<br>")

