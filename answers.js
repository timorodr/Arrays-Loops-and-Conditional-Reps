////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i < 21; i++) {
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i+=2) {
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
//Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i <=100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log ("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee [2] = 5001;
//accessing the array and remember that index start at 0 
console.log(plantee)

wolfy [3] = "Gotham City";
console.log(wolfy)

dart[3] = "Upside Down & Hawkins";
console.log(dart)
// Maybe should use .push but that creates a seperate category seperated by a comma in array
wolfy[0] = "Gameboy";
console.log(wolfy)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for(let turtles of tmnt) {
    console.log(turtles.toUpperCase())
}
// for of loop practice is making it easier to use
////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////