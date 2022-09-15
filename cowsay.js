let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "소~하~",
    e: "⊙ ",
  })
);

require("dotenv").config();
console.log(process.env.SECRET_KEY); // remove this after you've confirmed it working

// var cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "나다",
//     e: "**",
//     T: "",
//   })
// );

// // or cowsay.think()
