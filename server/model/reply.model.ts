import { INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Reply = sequelize.define('reply_table', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    description: TEXT,
    img: STRING,
    number: INTEGER
});

module.exports = Reply;