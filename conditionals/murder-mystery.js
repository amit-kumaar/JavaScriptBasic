/*
 * Programming Quiz: Murder Mystery
 */

/*
 * QUIZ REQUIREMENTS
 * QUIZ REQUIREMENTS
 * 1. Your code should have four variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output when the case is solved: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 */

/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code

const room = "dining room";
const suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "";
let solved = false;

/*
 * To help solve this mystery, write a combination of conditional statements that:
 * 1. sets the value of weapon based on the room and
 * 2. sets the value of solved to true if the value of room matches the suspect's room
 */
if (room === "dining room" && suspect === "Mr. Parkes") {
  weapon = "knife";
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "posion";
  solve = true;
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
  console.log("The case is not solved!");
}
/* ****************************************** */
