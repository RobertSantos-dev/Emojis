import { Model, INTEGER } from 'sequelize';
import Emojis from './Emoji';
import Users from './User';
import db from '.';

class UsersEmojis extends Model {
  declare id: number;
  declare userId: number;
  declare emojiId: number;
}

UsersEmojis.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    // field: 'user_id',
  },
  emojiId: {
    type: INTEGER,
    allowNull: false,
    // field: 'emoji_id',
  },
}, {
  underscored: true,
  sequelize: db,
  // tableName: 'users_emojis',
  modelName: 'users_emojis',
  timestamps: false,
});

UsersEmojis.belongsTo(Users, { foreignKey: 'userId' });
UsersEmojis.belongsTo(Emojis, { foreignKey: 'emojiId' });

export default UsersEmojis;