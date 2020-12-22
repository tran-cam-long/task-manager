const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// const currentUser = new User({
//   name: "long     ",
//   email: "      Ilony7499@gmail.com",
//   age: 100,
//   password: "connc",
// });

// currentUser
//   .save()
//   .then((user) => {
//     console.log("User saved: " + user);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// const newTask = new Task({
//   description: "Wash hand",
// });

// newTask
//   .save()
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
