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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

let index = favMovies.indexOf('Titanic')
console.log(index)
// create another variable to become the index of your specific element in the array. Log that variable. TYSM class reference page
let sort = favMovies.sort()
console.log(sort)
// the .sort method arranged the array in alphabetical order in the terminal however the array in the variable is the same as before
let pop = favMovies.pop()
console.log(pop)

let push = favMovies.push('Guardians of the Galaxy');
console.log(push)

let reverse = favMovies.reverse()
console.log(reverse)

let shift = favMovies.shift()
console.log(shift)

let unshift = favMovies.unshift('Guardians of the Galaxy')
console.log(unshift)
// unshift adds whatever element your heart desires to the start/beginning of the array
let djangoIndex = favMovies.indexOf('Django Unchained')
console.log(djangoIndex)

favMovies.splice(15, 1, 'Avatar')
console.log(favMovies)
//Yes this permanently altered the array. It removed Django and replaced it with Avatar.
let slice = favMovies.slice(0, 9)
console.log(slice)
// in this case I will round up and slice at the index of 9.
// The slice method extracts a portion of the array we are requesting using which index we're asking to extract
// The array now only shows the extracted array from slicing, the last half of the array.
let ffIndex = favMovies.indexOf('Fast and Furious')
console.log(ffIndex)
// We still get the index of the element in the array even if it has been removed.
// I dont believe we changed the variable as it is still the original array however we modified the contents in the array using various methods.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)
// Multidimensional arrays are a bit odd to read at the moment however still able to remove Eggbert
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo)

let waldo = whereIsWaldo[2][1][1];
console.log(waldo)
// Counting multidimensional arrays is difficult. I tried to find waldo in the 3rd array but it comes back in terminal with
// an error. So I began to decrease from 3 and in the 2nd array it finds waldo? I need more practice. I will get better.
//let waldoIndex = whereIsWaldo[2].indexOf("Waldo")
// .log(whereIsWaldo[2].)

////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let i = 0; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
}

const kittenArray = [ "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 0; i <= 20; i++) {
   if (i % 2 === 0) {
    console.log(kittenArray[Math.floor(Math.random() * 3)])
   } else {
    console.log("Love me, pet me! HSSSSSS!")
   }
    
}





////////////////////////////////
//  Find the Median
////////////////////////////////