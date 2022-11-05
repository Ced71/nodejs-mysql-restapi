import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger.js';

import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();
const specs = swaggerJsdoc(options);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use('/api', employeesRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Route not exists
app.use((req, res) => res.status(404).json({ message: 'endpoint not found' }));

export default app;
