const n1 = prompt("Ingrese primer número")
const n2 = prompt("Ingrese segundo número")
const n3 = prompt("Ingrese tercero número")
const n4 = prompt("Ingrese cuarto número")
const n5 = prompt("Ingrese quinto número")

let suma = Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5);

let promedio = suma / Number(5);

document.write("la suma de los datos es" + suma + "<br>")
document.write("El promedio de los datos es" + promedio + "<br>")