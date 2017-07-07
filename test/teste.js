var assert = require('assert');
var npm_mysql = require('mysql');
var npm_sequelize = require('sequelize');

// app
const data_conexao_app = require('../data/conexao_app.js');
const objMysql = require('../services/mysql.js');
const objSequelize = require('../services/sequelize.js');

describe(
    'Teste Servico Mysql',
    function() {

        describe(
            '#getDatabases(objConexao)',
            function() {
                it(
                    'Total de databases',
                    function(done) {

                        const objConnectionBaseA = npm_mysql.createConnection({
                            host     : "localhost",
                            user     : "backup",
                            password : "UniSeguro",
                            database : "adriano"
                        });

                        const nr_qtd_database = 17;

                        objMysql.getDatabases(
                            objConnectionBaseA
                        ).then(
                            function(arrResultadoA) {
                                var a = assert.equal(
                                    arrResultadoA.length,
                                    nr_qtd_database
                                );

                                var b = assert.equal(
                                    arrResultadoA[0].ds_nome,
                                    'information_schema'
                                );

                                done();
                            }
                        ).catch(
                            function (objError) {
                                console.log(objError);
                            }
                        );
                    }
                );
            }
        );
    }
);

describe(
    'Teste sequelize',
    function() {
        this.timeout(0);

        describe(
            '#sequelize',
            function() {

                var objConnSequelize = data_conexao_app.CONEXAO_APP;

                it(
                    'Teste de Conexão do App',
                    function(done) {
                        objConnSequelize.authenticate()
                            .then(() => {
                                console.log('Conexao do app funcionou.');
                                done();
                            }
                        ).catch(
                            err => {
                                console.error('Unable to connect to the database:', err);
                                done();
                            }
                        );
                    }
                );

                it(
                    'Teste de modelos do APP',
                    function(done) {
                        var objModels = objSequelize.definicaoDataBase(objConnSequelize);

                        objModels.Mydb_Conexao
                            .sync({force: true})
                            .then(
                                () => {
                                    objModels.Mydb_Conexao.create(
                                        {
                                            ds_nome_conexao: 'ds_nome_conexao',
                                            ds_host: 'ds_host',
                                            ds_login: 'ds_login',
                                            ds_pass: 'ds_pass',
                                            ds_porta: 'ds_porta'
                                        }
                                    );

                                    objModels.Mydb_Conexao.findAll().then(teste => {
                                        console.log(teste);
                                        done();
                                    }).catch(
                                        function (objError) {
                                            console.log(objError);
                                        }
                                    );
                                    //console.log('Conexao do app funcionou.');
                                    done();
                                }
                        ).catch(
                            function (objError) {
                                console.log(objError);
                            }
                        );
                    }
                );
            }
        );
    }
);