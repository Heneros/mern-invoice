import mongoose from "mongoose";

// mongoose.set("strictQuery", false);

// const connectionToDB = async () => {
//   try {
//     mongoose
//       .connect("mongodb://mongo-db/mernproject?retryWrites=true&w=majority")
//       .then(() => console.log("Connected to db"))
//       .catch(() => console.log("Not connected"));
//   } catch (error) {
//     console.error(`Error 312: ${error.message} ${process.env.MONGO_URI}`);
//     process.exit(1);
//   }
// };
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      user: process.env.MONGO_ROOT_USERNAME,
      pass: process.env.MONGO_ROOT_PASSWORD,
      authSource: "admin",
    })
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.log(err));
};

export default connectDB;
