import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectionToDB = async () => {
  try {
    const connectionParams = {
      dbName: process.env.DB_NAME,
    };
    const mongoUri = `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@mongodb`;

    const connect = await mongoose.connect(mongoUri, connectionParams);
    console.log(
      `MongoDB Connected: ${connect.connection.host} ${process.env.MONGO_URI}`
    );
    systemLogs.info(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error 123: ${error.message} ${process.env.MONGO_URI}`);
    process.exit(1);
  }
};

export default connectionToDB;
