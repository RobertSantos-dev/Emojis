import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import UsersEmojis from './UserEmoji';

class Users extends Model {
  declare id: number;
  declare name: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  },
  {
    sequelize: db,
    // tableName: 'users',
    modelName: 'users',
    timestamps: false,
})

// Users.hasMany(UsersEmojis, { foreignKey: 'userId' })

export default Users;