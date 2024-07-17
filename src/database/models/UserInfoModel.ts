import {
  DataTypes,
  Model,
  type Sequelize,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
} from 'sequelize';

class UserInfo extends Model<
  InferAttributes<UserInfo>,
  InferCreationAttributes<UserInfo>
> {
  declare id: number;
  declare email: string;
  declare name: string;
  declare password: string;
  declare profileImgUrl: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export const InitializeUserInfoModel = (sequelize: Sequelize) => {
  UserInfo.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },

      profileImgUrl: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { tableName: 'Users', sequelize },
  );
};

export default UserInfo;
