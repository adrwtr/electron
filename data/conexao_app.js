var npm_sequelize = require('sequelize');

module.exports = {
    CONEXAO_APP: new npm_sequelize(
        'database',
        'root',
        'root', {
            host: 'localhost',
            dialect: 'sqlite',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            // SQLite only
            storage: 'database.sqlite'
        }
    )
};