// Pick a string. Your string can have any number of characters.
const my_string = "A";
// Calculate the ASCII value of the first character,
// i.e. the character at the position 0.
const ASCII_value = my_string.charCodeAt(0);
console.log(ASCII_value);


const my_string2= "Hello";
//Iterate using a loop.
for (let i=0; i<=my_string2.length;i++){
    console.log(my_string2.charCodeAt(i));
}


//A boolean variable can take either of two values - true or false. For example,

const studentName="John";
const haveEnrolledInCourse=false;
const haveCompletedCourse=true;

if(haveEnrolledInCourse){
    console.log(studentName + "has enrolled in the course.");
}
else
    console.log(studentName + "has completed the course.")




