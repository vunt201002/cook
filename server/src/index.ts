import express, { Express, Request, Response } from 'express';
import { envConfig } from '~/constants/config';
import connectDB from '~/service/database.services';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Express = express();
const PORT = envConfig.PORT;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
  // store: ... , // Use an external store for more precise rate limiting
});

connectDB().then(() => {
});

app.set('trust proxy', 1); // trust first proxy

app.use(limiter);
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello word');
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
