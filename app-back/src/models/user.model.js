
import sequelize from '../database/sequelize.js'
import { DataTypes } from 'sequelize'
import env from './../env.js'

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING(125),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(125),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(125),
        allowNull: false,
    }
});

(async () => {
    await sequelize.sync({ force: env.db.sync });
})();

export default User