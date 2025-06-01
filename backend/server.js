import express from 'express';
const PORT = process.env.PORT || 3000;
import colors from 'colors';
import { errorHandler } from './middleware/errorMiddleware.js';
import router from './routes/newsLetters.js';
import routerLetters from './routes/getNewsLetter.js'
import {connectDB} from './config/db.js'
import userRouter from './routes/UsersRoutes.js';

const app = express();
//to connect to the mongodb server
connectDB();

// Middleware to parse JSON and URL-encoded data and can not display the accept body data without this as tested in postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* app.get('/', (req, res) => {
  res.json({message:'Hello, World!'});
});
 */
//Routes for users
app.use('/api/users', userRouter);
// Route for newsletters
app.use('/api/addingLetters', router);
app.use('/api/getNewsLetters', routerLetters)
// middleware to handle error responses in general
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.green);
});

