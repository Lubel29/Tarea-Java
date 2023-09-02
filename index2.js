let numeros = [5, 9, 12, 3, 58, 24, 67, 15, 7, 47, 23, 77, 6, 33]

let mayor = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

}
console.log(mayor);
document.write(mayor);


