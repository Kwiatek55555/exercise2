var maxBus = 10;
var workingBus = 7;
var countingBus = 1;

for (countingBus; countingBus <= workingBus; countingBus ++) {
    console.log('Autobus #' + countingBus + ' jwst sprawny, potrzebuje kierowcy.');
}

for (countingBus; countingBus <= maxBus; countingBus ++) {
    console.log('Aurobus #' + countingBus + ' nie jest sprawny, potrzebuje zespołu naprawczego.')
}