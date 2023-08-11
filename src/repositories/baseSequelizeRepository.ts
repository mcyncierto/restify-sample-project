import { BaseSequelizeRepositoryInterface } from "./interfaces/baseSequelizeRepositoryInterface";

export class BaseSequelizeRepository
  implements BaseSequelizeRepositoryInterface
{
  constructor(private model: any) {
    this.model = model;
  }

  async getAll(): Promise<object> {
    return this.model.findAll();
  }

  async findById(id: string): Promise<any | null> {
    return this.model.findByPk(id);
  }

  async create(data: any, trans = {}): Promise<object> {
    return this.model.create(data, trans);
  }

  async update(id: string, data: object): Promise<object> {
    return this.model
      .update(data, {
        where: { id },
      })
      .then(() => this.findById(id));
  }

  async delete(id: string, attributes: object): Promise<any> {
    const record = await this.findById(id);
    // if (!record) {
    //   throw new ApiError(400, `Record with id ${id} not found.`);
    // }

    return record.destroy(attributes);
  }

  async findOne(attributes: object, includes = {}): Promise<object> {
    const record = await this.model.findOne({
      where: attributes,
      include: includes,
    });

    return record;
  }

  async findWhere(
    attributes: object,
    orderAttributes = [["id", "DESC"]],
    queryOptions = {}
  ): Promise<object> {
    const record = await this.model.findAll({
      where: attributes,
      order: orderAttributes,
      ...queryOptions,
    });
    return record;
  }

  async bulkCreate(
    data: object,
    updateOnDuplicateFields = []
  ): Promise<object> {
    if (updateOnDuplicateFields.length > 0) {
      return await this.model.bulkCreate(data, {
        updateOnDuplicate: updateOnDuplicateFields,
      });
    }

    return await this.model.bulkCreate(data);
  }

  async bulkDelete(attributes: object): Promise<object> {
    return await this.model.destroy(attributes);
  }
}
