// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

createFareMultiplier = (fare) => {
    return function fareMultiplier (fare) {      
        return fare*fare
    } 
}

function fareDoubler (fare){
    return fare*2
}

function fareTripler (fare){
    return fare*3
}

function selectDifferentDrivers (drivers, b){
    
    if (b === returnFirstTwoDrivers) {b = drivers.slice(0,2);}
    else {b = drivers.slice(2,4);}
return b
}









