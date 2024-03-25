// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
const hqBlock=42;
let distance= Math.abs(pickUp-hqBlock);
return distance
}
console.log (distanceFromHqInBlocks(53));

function distanceFromHqInFeet(pickUp){
let distanceInFeet=Math.abs(distanceFromHqInBlocks(pickUp)*264);
return distanceInFeet
}
console.log (distanceFromHqInFeet(53));


function distanceTravelledInFeet(start,stop){
    let distanceTravelled;
    if(start>stop){
        distanceTravelled=(start-stop)*264;
    }else{
        distanceTravelled=(stop-start)*264;
    }
     return distanceTravelled
}
console.log(distanceTravelledInFeet(38,44));

function calculatesFarePrice(start, stop) {
    let distance = Math.abs((stop - start) * 264);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}