import {config} from 'dotenv'
import * as process from 'node:process'

config()

export const envConfig = {
  PORT: (process.env.PORT as string) || 4000,
  MONGODB_URL: process.env.MONGODB_URL as string
}
