const bcrypt = require("bcrypt");
const saltRounds = 14;
const myPlaintextPassword = "tryingisdying";

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  console.log(hash);
});
