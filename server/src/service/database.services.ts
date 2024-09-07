import * as mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
import { envConfig } from '~/constants/config';

const connectDB = async () => {
  try {
    const options: ConnectOptions = {};
    await mongoose.connect(envConfig.MONGODB_URL, options);
    console.log(`connected to mongoDb`);
  } catch (err) {
    console.log(`error when connect mongo`, err);
    process.exit(1);
  }
};

export default connectDB;
