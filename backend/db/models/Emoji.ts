import { TEXT } from 'sequelize';
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import UserEmoji from './UserEmoji';

class Emojis extends Model {
  declare id: number;
  declare name: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Emojis.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: TEXT,
    allowNull: false,
  }
  },
  {
    sequelize: db,
    // tableName: 'emojis',
    modelName: 'emojis',
    timestamps: false,
})

Emojis.hasMany(UserEmoji, { foreignKey: 'emojiId' })

export default Emojis;
