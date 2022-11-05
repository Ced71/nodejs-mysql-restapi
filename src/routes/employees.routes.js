import { Router } from 'express';

import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employees.controller.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Employee:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: The auto-generated id of employee
 *        name:
 *          type: string
 *          description: The name of the employee
 *        salary:
 *          type: number
 *          description: The salary of the employee
 *      example:
 *        id: 3
 *        name: Luis Torres
 *        salary: 5435
 *    EmployeeNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found employee
 *      example:
 *        msg: Employee not found
 *
 *  parameters:
 *    employeeId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The employee id
 */

/**
 * @swagger
 * tags:
 *  name: Employees
 *  description: Employees endpoint
 */

/**
 * @swagger
 * /api/employees:
 *  get:
 *    summary: Returns a list of employees
 *    tags: [Employees]
 *    responses:
 *      200:
 *        description: The list of employees
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Employee'
 */
router.get('/employees', getEmployees);

/**
 * @swagger
 * /api/employees/{id}:
 *  get:
 *    summary: Get a employee by Id
 *    tags: [Employees]
 *    parameters:
 *      - $ref: '#/components/parameters/employeeId'
 *    responses:
 *      200:
 *        description: The found employee
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The employee was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeNotFound'
 */
router.get('/employees/:id', getEmployee);

/**
 * @swagger
 * /api/employees:
 *  post:
 *    summary: Create a new employee
 *    tags: [Employees]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: The employee was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      500:
 *        description: Something goes wrong
 *
 */
router.post('/employees', createEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *  patch:
 *    summary: Update a employee by id
 *    tags: [Employees]
 *    parameters:
 *      - $ref: '#/components/parameters/employeeId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: The updated employee
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The employee was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeNotFound'
 *
 */
router.patch('/employees/:id', updateEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *  delete:
 *    summary: Delete a employee by id
 *    tags: [Employees]
 *    parameters:
 *      - $ref: '#/components/parameters/employeeId'
 *    responses:
 *      204:
 *        description: The employee was deleted
 *        content:
 *      404:
 *        description: The employee was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmployeeNotFound'
 *
 */
router.delete('/employees/:id', deleteEmployee);

export default router;
