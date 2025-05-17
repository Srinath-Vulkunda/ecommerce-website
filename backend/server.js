import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';//route for authentication
import {connectDB} from './lib/db.js';//database connection
import { connect } from 'mongoose';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes);

app.use(express.json());
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});