const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('characters');
    printHere.innerHTML = stringToPrint;
}
console.log('util.js says hi');

export {printToDom}