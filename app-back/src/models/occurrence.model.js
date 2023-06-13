
import { DataTypes } from 'sequelize';
import sequelize from '../database/sequelize.js'
import env from './../env.js'
import User from './user.model.js';

const Occurrence = sequelize.define("occurrences", {
    registered_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occurrence_type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    km: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    }
});

Occurrence.hasOne(User, { foreignKey: 'user_id',  });

(async () => {
    await sequelize.sync({ force: env.db.sync });
})();

export default Occurrence