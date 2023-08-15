import { BaseSequelizeRepositoryInterface } from "./interfaces/baseSequelizeRepositoryInterface";

export class BaseSequelizeRepository
  implements BaseSequelizeRepositoryInterface
{
  /**
   * Creates an instance of BaseSequelizeRepository.
   *
   * @param {any} model - The Sequelize model to be used.
   */
  constructor(private model: any) {
    this.model = model;
  }

  /**
   * Retrieves all records from the model.
   *
   * @returns {Promise<object[]>} A Promise that resolves with an array of records.
   */
  async getAll(): Promise<object[]> {
    return this.model.findAll();
  }

  /**
   * Finds a record by its ID.
   *
   * @param {string} id - The ID of the record to find.
   * @returns {Promise<any | null>} A Promise that resolves with the found record or null if not found.
   */
  async findById(id: string): Promise<any | null> {
    return this.model.findByPk(id);
  }

  /**
   * Creates a new record.
   *
   * @param {object} data - The data for creating the record.
   * @param {object} [trans={}] - Transaction options for the creation.
   * @returns {Promise<any>} A Promise that resolves with the created record.
   */
  async create(data: object, trans: object = {}): Promise<any> {
    return this.model.create(data, trans);
  }

  /**
   * Updates a record by ID.
   *
   * @param {string} id - The ID of the record to update.
   * @param {object} data - The data for updating the record.
   * @returns {Promise<object>} A Promise that resolves with the updated record.
   */
  async update(id: string, data: object): Promise<object> {
    return this.model
      .update(data, {
        where: { id },
      })
      .then(() => this.findById(id));
  }

  /**
   * Deletes a record by ID.
   *
   * @param {string} id - The ID of the record to delete.
   * @param {object} attributes - Additional attributes for deletion.
   * @returns {Promise<any>} A Promise that resolves with the deleted record.
   */
  async delete(id: string, attributes: object): Promise<any> {
    const record = await this.findById(id);
    if (!record) {
      throw new Error(`Record with id ${id} not found.`);
    }

    return record.destroy(attributes);
  }

  /**
   * Finds the first record that matches the given attributes.
   *
   * @param {object} attributes - The attributes to search for.
   * @param {object} [includes={}] - Included associations.
   * @returns {Promise<object | null>} A Promise that resolves with the found record or null if not found.
   */
  async findOne(attributes: object, includes: object = {}): Promise<object> {
    const record = await this.model.findOne({
      where: attributes,
      include: includes,
    });

    return record;
  }

  /**
   * Finds records that match the given attributes.
   *
   * @param {object} attributes - The attributes to search for.
   * @param {string[][]} [orderAttributes=[["id", "DESC"]]] - Order attributes for sorting.
   * @param {object} [queryOptions={}] - Additional query options.
   * @returns {Promise<object[]>} A Promise that resolves with an array of found records.
   */
  async findWhere(
    attributes: object,
    orderAttributes: string[][] = [["id", "DESC"]],
    queryOptions: object = {}
  ): Promise<object> {
    const record = await this.model.findAll({
      where: attributes,
      order: orderAttributes,
      ...queryOptions,
    });
    return record;
  }

  /**
   * Bulk creates records.
   *
   * @param {object[]} data - The data for creating records.
   * @param {string[]} [updateOnDuplicateFields=[]] - Fields to update on duplicate key conflict.
   * @returns {Promise<object[]>} A Promise that resolves with an array of created records.
   */
  async bulkCreate(
    data: object,
    updateOnDuplicateFields: string[] = []
  ): Promise<object> {
    if (updateOnDuplicateFields.length > 0) {
      return await this.model.bulkCreate(data, {
        updateOnDuplicate: updateOnDuplicateFields,
      });
    }

    return await this.model.bulkCreate(data);
  }

  /**
   * Bulk deletes records.
   *
   * @param {object} attributes - The attributes for deleting records.
   * @returns {Promise<object>} A Promise that resolves with the result of the deletion.
   */
  async bulkDelete(attributes: object): Promise<object> {
    return await this.model.destroy(attributes);
  }
}
