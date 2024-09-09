import express, { Express, Request, Response } from 'express';
import { envConfig } from '~/constants/config';
import connectDB from '~/services/database.services';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import usersRouter from '~/routes/user.routes';
import blogsRouter from '~/routes/blog.routes';
import authUserRouter from '~/routes/authUser.routes';
import { defaultErrorHandler } from '~/middlewares/error.middleware';

const app: Express = express();
const PORT = envConfig.PORT;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
  // store: ... , // Use an external store for more precise rate limiting
});

connectDB().then(() => {});

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

app.use('/api/auth/users', authUserRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);

app.use(defaultErrorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
