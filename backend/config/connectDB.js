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

    console.log(`MongoDB Connected: ${connect.connection.host}`);
    systemLogs.info(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error 312: ${error.message} ${process.env.MONGO_URI}`);
    process.exit(1);
  }
};

export default connectionToDB;
