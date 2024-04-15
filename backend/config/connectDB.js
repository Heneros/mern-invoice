import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectionToDB = async () => {
  try {
    const connectionParams = {
      dbName: process.env.DB_NAME,
    };
    const connect = await mongoose.connect(
      process.env.MONGO_URI,
      connectionParams
    );
    console.log(`Mongodb connected  ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error  ${error.message}`);
    process.exit(1);
  }
};

export default connectionToDB;
