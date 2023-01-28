import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    '4spschan',
    `${process.env.DB_USERNAME}`,
    `${process.env.DB_PASS}`, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            ssl: false
        },
    }
);

const Thread = require('./model/thread.model');
const Reply = require('./model/reply.model');

Thread.hasMany(Reply);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('database connection successful');
    } catch (error) {
        console.log('database connection failed');
    }
})();

(async () => {
    await sequelize.sync({ force: true });
    console.log('juch');
})();