// server/src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import astroRoutes from './routes/astroRoutes.js'; // Import routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🛑 SECURITY UPDATE: Restrict access to your frontend
const allowedOrigins = [
  'https://nakshatra.vercel.app', 
  'http://localhost:5173',               
  'http://localhost:3000'              
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  }
}));

app.use(express.json());

// Mount the astrology route
app.use('/api/astrology', astroRoutes);

app.get('/', (req, res) => {
  res.send('Nakshatra Cosmic Engine is Online...');
});

app.listen(PORT, () => {
  console.log(`Nakshatra backend humming on port ${PORT}`);
});