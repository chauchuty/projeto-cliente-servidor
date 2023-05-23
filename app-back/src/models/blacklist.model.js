
import sequelize from '../database/sequelize.js'
import { DataTypes } from 'sequelize'
import env from './../env.js'

const Blacklist = sequelize.define("blacklist", {
    token: {
        type: DataTypes.STRING(125),
        allowNull: false
    },
});

(async () => {
    await sequelize.sync({ force: env.db.sync });
})();

export default Blacklist