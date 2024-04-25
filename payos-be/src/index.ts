import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const cors = require("cors");
import { BookRouter } from "./routes/book/index";
import { PaymentRouter } from "./routes/payment/index";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/book', BookRouter);
app.use('/payment', PaymentRouter);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});