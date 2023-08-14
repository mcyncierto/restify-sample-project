/**
 * @swagger
 * definition:
 *   Task:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       title:
 *         type: string
 *       description:
 *         type: string
 *     required:
 *       - title
 *       - description
 *     example:   # <----------
 *       id: "0a49cfde-48f5-4fb6-b267-2a6ae123bff2"
 *       title: "Lorem Ipsum"
 *       description: "Lorem Ipsum Dolor"
 */

/**
 * @swagger
 * tags:
 *  name: Task
 *  description: Task API endpoints
 */

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    tags: [Task]
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: title
 *        in: body
 *        description: The title of the task
 *        required: true
 *        schema:
 *          type: string
 *          example: Lorem Ipsum
 *      - name: description
 *        in: body
 *        description: The description of the task
 *        required: true
 *        schema:
 *          type: string
 *          example: Lorem Ipsum Dolor
 *    responses:
 *      201:
 *        description: Returns the id of the created task
 *        examples:
 *          application/json:
 *            data:
 *              id: "0a49cfde-48f5-4fb6-b267-2a6ae123bff2"
 *      400:
 *        description: Invalid request body
 */
