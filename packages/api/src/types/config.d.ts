import { HookReturn, Optional } from "sequelize";

export interface IHook<T> {
  beforeCreate?: (modelInstance: T) => HookReturn;
  beforeUpdate?: (modelInstance: T) => HookReturn;
}

export interface ITokenPayload {
  id: string;
  iat: number;
  exp: number;
}