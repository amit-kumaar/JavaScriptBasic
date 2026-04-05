const donuts = ["jelly donut", "chocolate donut", "glazed donut"];
let i = 0;
for (i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);

/*---------------------------forEach Method--------------------------------------*/

donuts.forEach(function (donuts) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts);
});

/*---------------------------forEach Syntax--------------------------------------*/


const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: ", element);
  console.log("Index: ", index);
  console.log("Array: ", array);
}
myArray.forEach(myAwesomeFunction);


/*-------------------------------------------------------------------------------------*/
words = ["cat", "in", "hat"];
words.forEach(function(word,num,all){
    console.log("Word " + num  + " in " + all.toString() + " is " + word);
})


/*-----------------------------------for loops--------------------------------------------------*/

const array=[1, 2, 3, 4, 5];
for(let i=0; i<array.length ; i++){
    if(i===2){
        break;
    }
}

/*-----------------------------------forEach loops--------------------------------------------------*/

array.forEach(function(element){
  //  if(element===7){
    console.log(element);

 //   }
})

/*-----------------------------------Map loops--------------------------------------------------*/

const newArray = array.map(function(element){
    element +=100;
    return element;
})
console.log(newArray);


const donut = ["jelly donut", "chocolate donut", "glazed donut"];
const newDonut =donut.map(function(i){
    i += ' hole';
    i =i.toUpperCase();
    return i;
})
console.log(newDonut);


//---------------------------------2d array-----------------------------------------

const grid = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

for(let r=0;r<grid.length;r++){
    for(let c=0; c<grid[r].length; c++){
    console.log(grid[r][c])
  }
}


const donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];

for(let row=0; row<donutBox.length;row++) {
    for(let column=0;column<donutBox[row].length;column++)
    console.log(donutBox[row][column])
}