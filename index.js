// Code your solution in this file!

function distanceFromHqInBlocks(num1, num2 = 42) {
    if (num1 > num2) {
return num1 - num2;
 } else {
    return num2 - num1;
 }
}
console.log(distanceFromHqInBlocks())

function distanceFromHqInFeet(num1, num2 ,num3 = 264) {
    distanceFromHqInBlocks(num1, num2 = 42);
    if (num1 > num2) {
return (num1 - num2)*num3;
 } else {
    return (num2 - num1)*num3;
 }
}
console.log(distanceFromHqInFeet())

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start)*264;
    } else {
        return (start-destination)*264;
    }
}
console.log(distanceTravelledInFeet())

function calculatesFarePrice(start , destination){
    if((destination - start) <= 400){
        return 0;
    }else if ((destination - start) < 2000){
        return (destination - start)*0.02;
    }else if ((destination - start) < 2500){
        return 25;
    }else if((destination - start) > 2500){
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(0 , 700))








