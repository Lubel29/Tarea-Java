const metros = prompt(`ingresar metros a recorrer:`, "");


if (metros < 1000) {
    console.log('ir a pie')
    document.write('ir a pie');
} else if (metros < 10000) {
    console.log('ir en bici')
    document.write('ir en bici');
} else if (metros < 30000) {
    console.log('ir en colectivo')
    document.write('ir en colectivo');
} else if (metros < 100000) {
    console.log('ir en auto')
    document.write('ir en auto');
} else {
    console.log('ir en avion')
    document.write('ir en avion');
}




