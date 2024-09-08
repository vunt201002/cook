import * as mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
import { envConfig } from '~/constants/config';

const connectDB = async () => {
  try {
    const options: ConnectOptions = {};
    await mongoose.connect(envConfig.MONGODB_URL, options);
    console.log(`Connected to mongoDb`);
  } catch (err) {
    console.log(`Error when connect mongoDb`, err);
    process.exit(1);
  }
};

export default connectDB;
