// დაწერეთ ფუნქცია calculateUniversalArea რომელიც დააბრუნებს მასივის (areaSidesList) ყველა ელემენტის ჯამს
let areaSidesList = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20];

function calculateUniversalArea(list) {
    let result = 0;
    for (let x = 0; x < list.length; x++) {
       result = result + list[x];
    }
    return result;
}

console.log(
    calculateUniversalArea(areaSidesList)//130
);

