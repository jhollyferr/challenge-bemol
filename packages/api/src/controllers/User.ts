import { Request, Response } from "express";
import { IUserModel } from "../types/";
import { UserModel } from "../models/User";
import { AddresModel } from "../models/Address";
import { AppError } from "../exceptions/AppError";

export class UserController {
  static create = async (
    request: Request,
    response: Response
  ): Promise<Response<IUserModel>> => {
    try {
      const { name, email, github, level, address } = request.body;

      const existUser: IUserModel = (await UserModel.findOne({
        where: { email },
      })) as IUserModel;

      if (existUser) {
        throw new AppError({
          httpCode: 500,
          description: "O e-mail fornecido já está em uso",
        });
      }

      const user: IUserModel = await UserModel.create({
        name,
        email,
        github,
        level,
      });

      if (user)
        await AddresModel.create({
          city: address.city,
          district: address.district,
          zip_code: address.zip_code,
          user_id: user.id,
        });

      return response.status(201).json(
        await UserModel.findOne({
          raw: false,
          where: { id: user.id },
          attributes: {
            exclude: ["password"],
          },
          include: AddresModel,
        })
      );
    } catch (error) {
      const errorMessage = error instanceof AppError ? error : null;

      return response.status(Number(errorMessage?.httpCode)).json({
        error,
        message: errorMessage?.message,
      });
    }
  };
}
