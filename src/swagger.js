export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Employees API',
      description: 'Example of CRUD API ',
      version: '1.0.0',
    },
  },
  // looks for configuration in specified directories
  apis: ['./src/routes/*.js'],
};
