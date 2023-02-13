import {ContextModel} from "./context.model";

export interface ApiResponseModel {
  readonly data: {
    user: {
      id: string;
      context: ContextModel
    };
  };
}

