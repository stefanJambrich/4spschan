import { INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Thread = sequelize.define('thread_table', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    category: STRING,
    title: STRING,
    description: TEXT,
    img: STRING,
    number: INTEGER
});

module.exports = Thread;