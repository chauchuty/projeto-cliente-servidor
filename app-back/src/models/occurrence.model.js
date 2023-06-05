
import { DataTypes } from 'sequelize';
import sequelize from '../database/sequelize.js'
import env from './../env.js'
import User from './user.model.js';

const Ocurrence = sequelize.define("ocurrences", {
    registered_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occurence_type: {
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

Ocurrence.hasOne(User, { foreignKey: 'user_id',  });


(async () => {
    await sequelize.sync({ force: env.db.sync });
})();

export default Ocurrence