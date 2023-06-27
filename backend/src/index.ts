import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { db } from '../src/db/db';
import router from './router';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
})

db(MONGO_URL);

app.use('/', router());
