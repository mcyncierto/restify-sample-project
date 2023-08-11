export interface BaseSequelizeRepositoryInterface {
  getAll(): Promise<object>;
  findById(id: string): Promise<object>;
  create(data: any, trans?: {}): Promise<object>;
  update(id: string, data: object): Promise<object>;
  delete(id: string, attributes: object): Promise<void>;
  findOne(attributes: object, includes?: {}): Promise<object>;
  findWhere(
    attributes: object,
    orderAttributes?: any[],
    queryOptions?: {}
  ): Promise<object>;
  bulkCreate(data: object, updateOnDuplicateFields?: string[]): Promise<object>;
  bulkDelete(attributes: object): Promise<object>;
}
