/**
 * @swagger
 * tags:
 *  name: Healthcheck
 *  description: Healthcheck API endpoints
 */

/**
 * @swagger
 * /healthcheck:
 *  get:
 *    summary: api status
 *    description: Returns the current state of api
 *    tags: [Healthcheck]
 *    responses:
 *      200:
 *        description: Returns current state of api
 *        examples:
 *          application/json: {
              "app status": "ok"
            }
 */

/**
 * @swagger
 * /healthcheck/db:
 *  get:
 *    summary: database status
 *    description: Returns the current state of database
 *    tags: [Healthcheck]
 *    responses:
 *      200:
 *        description: Returns current state of database
 *        examples:
 *          application/json: {
              "db status": "ok"
            }
 */
