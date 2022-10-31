import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface IUserModel
  extends Model<
    InferAttributes<IUserModel>,
    InferCreationAttributes<IUserModel>
  > {
  id?: string;
  name: string;
  email: string;
  github: string;
  level: string;
}

export interface IAddressModel
  extends Model<
    InferAttributes<IAddressModel>,
    InferCreationAttributes<IAddressModel>
  > {
  id?: string;
  user_id?: string;
  district: string;
  zip_code: string;
  city: string;
}
