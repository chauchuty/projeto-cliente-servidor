import { Sequelize } from 'sequelize'
import env from '../env.js'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: env.db.url
});

try {
    await sequelize.authenticate();
    console.log('[Sequelize] - Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize