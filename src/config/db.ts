import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize('postgresql://rest_api_node_typescript_c5gd_user:nuC2YnHgKnvlhK5AcggicXadx4asADnF@dpg-ctaa3lggph6c73emjah0-a.oregon-postgres.render.com/rest_api_node_typescript_c5gd', {
    dialect: 'postgres',
    models: [__dirname + '/../models/**/*'],
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;
