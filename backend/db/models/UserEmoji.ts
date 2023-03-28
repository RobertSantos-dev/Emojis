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
    references: {
      model: Users,
      key: 'id'
    }
    // field: 'user_id',
  },
  emojiId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: Emojis,
      key: 'id'
    }
    // field: 'emoji_id',
  },
}, {
  underscored: true,
  sequelize: db,
  // tableName: 'users_emojis',
  modelName: 'users_emojis',
  timestamps: false,
});

Users.belongsToMany(Emojis, { through: UsersEmojis });
Emojis.belongsToMany(Users, { through: UsersEmojis });

// UsersEmojis.belongsToMany(Users, { foreignKey: 'userId' });
// UsersEmojis.belongsToMany(Emojis, { foreignKey: 'emojiId' });

// Users.hasMany(UsersEmojis, { foreignKey: 'userId' })
// Emojis.hasMany(UsersEmojis, { foreignKey: 'emojiId' });


export default UsersEmojis;