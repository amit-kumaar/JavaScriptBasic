/*
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */

// your code goes here

const facebookProfile = {
  name: "Amit",
  friends: 25,
  messages: ["hi", "how are you", "where are you", "How's ur day "],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
    }
  },
};

console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("Heyy Amit!");
console.log("Messages: ", facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ", facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);
