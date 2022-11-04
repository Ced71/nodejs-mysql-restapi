import express from 'express';
import cors from 'cors';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use('/api', employeesRoutes);

// Route not exists
app.use((req, res) => res.status(404).json({ message: 'endpoint not found' }));

export default app;
