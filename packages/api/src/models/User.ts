import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import { IHook } from "../types/config";
import { connection } from "../database/connection";
import { IUserModel } from "../types";

// const hooks: IHook<IUserModel> = {
//   beforeCreate: (user: IUserModel) => {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(user.password, salt);
//     user.password = hash;
//   },

//   beforeUpdate: (user: IUserModel) => {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(user.password, salt);
//     user.password = hash;
//   },
// };

const UserModel = connection.define<IUserModel>(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
  // { hooks }
);

export { UserModel };
