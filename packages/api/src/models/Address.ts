import { DataTypes } from "sequelize";
import { connection } from "../database/connection";
import { IAddressModel } from "../types";
import { UserModel } from "./User";

const AddresModel = connection.define<IAddressModel>("addresses", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  district: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  zip_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

AddresModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  constraints: true,
});

UserModel.hasOne(AddresModel, {
  foreignKey: "user_id",
  constraints: true,
});

// UserModel.hasMany(AddresModel, {
//   foreignKey: "user_id",
//   constraints: true,
// });

export { AddresModel };
