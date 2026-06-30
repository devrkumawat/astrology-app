// server/src/routes/astroRoutes.js
import express from 'express';
import { generateKundli } from '../controllers/astroController.js';

const router = express.Router();

router.post('/generate', generateKundli);

export default router;