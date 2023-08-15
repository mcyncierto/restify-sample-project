/**
 * @swagger
 * definition:
 *   Task:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         example: "0a49cfde-48f5-4fb6-b267-2a6ae123bff2"
 *       title:
 *         type: string
 *         example: "Lorem Ipsum"
 *       description:
 *         type: string
 *         example: "Lorem Ipsum Dolor"
 *       createdBy:
 *         type: string
 *         example: "0a49cfde-48f5-4fb6-b267-2a6ae123bff2"
 *     required:
 *       - title
 *       - description
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
 *      - name: body
 *        in: body
 *        description: The request body
 *        required: true
 *        schema:
 *          example: {
              "title": "Lorem Ipsum",
              "description": "Lorem Ipsum Dolor",
              "createdBy": "0a49cfde-48f5-4fb6-b267-2a6ae123bff2"
            }
 *    responses:
 *      201:
 *        description: OK
 *        examples:
 *          application/json:
 *            data:
 *              id: "0a49cfde-48f5-4fb6-b267-2a6ae123bff2"
 *      400:
 *        description: Bad Request. Invalid request body
 *        examples:
 *          application/json: {
              "errors": [
                "body.title: Title is required",
                "body.description: Description is required"
              ],
              "name": "ValidationException"
            }
 */
