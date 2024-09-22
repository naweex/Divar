/**
 * @swagger
 * tags:
 *  name: option
 *  description: option Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateOption:
 *              type: object
 *              required:
 *                  -   title
 *                  -   key
 *                  -   type
 *                  -   category
 *              properties:
 *                  title:
 *                      type: string
 *                  key:
 *                      type: string
 *                  category:
 *                      type: string
 *                  guid:
 *                      type: string
 *                  required:
 *                      type: boolean
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          -   boolean
 *                          -   array
 *                  enum:
 *                      type: array
 *                      items: 
 *                          type: string
 *          UpdateOption:
 *               type: object
 *               properties:
 *                  title:
 *                      type: string
 *                  key:
 *                      type: string
 *                  category:
 *                      type: string
 *                  guid:
 *                      type: string
 *                  required:
 *                      type: boolean
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          -   boolean
 *                          -   array
 *                  enum:
 *                      type: array
 *                      items: 
 *                          type: string
 */

/**
 * @swagger
 * /option:
 *  post:
 *      summary: create a new option for category
 *      tags:
 *          -   option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *      responses:
 *          201:
 *              description: created
 */
/**
 * @swagger
 * /option/{id}:
 *  put:
 *      summary: updated option by id
 *      tags:
 *          -   option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *      responses:
 *          201:
 *              description: created
 */

/**
 * @swagger
 * /option/by-category/{categoryId}:
 *  get:
 *      summary: get all options of category
 *      tags:
 *          -   option
 *      parameters:
 *          -   in: path
 *              name: categoryId
 *              type: string
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /option/by-category-slug/{slug}:
 *  get:
 *      summary: get all options of category
 *      tags:
 *          -   option
 *      parameters:
 *          -   in: path
 *              name: slug
 *              type: string
 *      responses:
 *          200:
 *              description: successfully
 */

/**
 * @swagger
 * /option/{id}:
 *  get:
 *      summary: get options by id
 *      tags:
 *          -   option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: successfully
 */

/**
 * @swagger
 * /option:
 *  get:
 *      summary: get all options
 *      tags:
 *          -   option
 *      responses:
 *          200:
 *              description: successfully
 */


/**
 * @swagger
 * /option/{id}:
 *  delete:
 *      summary: delete options by id
 *      tags:
 *          -   option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: deleted successfully
 */