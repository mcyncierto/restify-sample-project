import { Task } from "../types/taskType";

class TaskTransformer {
  static resource(
    item: Task,
    isCollection: boolean = false,
    fields: any = []
  ): object {
    let returnData = {};

    if (fields.length > 0) {
      Object.values(fields).forEach((field: string) => {
        returnData[field] = item[field];
      });
    } else {
      returnData = {
        id: item.id,
        title: item.title,
        description: item.description,
        createdBy: item.createdBy,
        lastUpdatedBy: item.lastUpdatedBy,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    }

    return isCollection ? returnData : { data: returnData };
  }

  static collection(items: Task[]): object {
    return {
      data: items.map((item) => this.resource(item, true)),
    };
  }
}

export default TaskTransformer;
