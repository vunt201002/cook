import { config } from 'dotenv';
import * as process from 'node:process';

config();

export const envConfig = {
  PORT: (process.env.PORT as string) || 4000,
  MONGODB_URL: process.env.MONGODB_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN as string
};
