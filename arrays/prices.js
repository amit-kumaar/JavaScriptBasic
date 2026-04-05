/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The value of the 1st, 3rd, and 7th elements should be doubled
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements.
 */

const prices = [5, 10, 15, 20, 25, 30, 35, 40];
for(i=0; i<prices.length; i++){
    if(i===0 || i===2 || i===6){
        prices[i]=prices[i]*2;
    };
};
console.log(prices);