import { TEXT } from 'sequelize';
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import UsersEmojis from './UserEmoji';

class Emojis extends Model {
  declare id: number;
  declare code: string;
  declare description: string;
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

// Emojis.hasMany(UsersEmojis, { foreignKey: 'emojiId' })

export default Emojis;
