var npm_sequelize = require('sequelize');

function definicaoDataBase(objSequelize) {
    const Mydb_Conexao = objSequelize.define(
        'mydb_conexao',
        {
            ds_nome_conexao: {
                type: npm_sequelize.STRING
            },
            ds_host: {
                type: npm_sequelize.STRING
            },
            ds_login: {
                type: npm_sequelize.STRING
            },
            ds_pass: {
                type: npm_sequelize.STRING
            },
            ds_porta: {
                type: npm_sequelize.STRING
            }
        }
    );

    return {
        Mydb_Conexao: Mydb_Conexao
    };
}


module.exports = {
    definicaoDataBase: definicaoDataBase
};