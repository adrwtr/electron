var assert = require('assert');
var objMysql = require('mysql');

const mysql = require('../services/mysql.js');


const objConnectionBaseA = objMysql.createConnection({
    host     : "localhost",
    user     : "backup",
    password : "UniSeguro",
    database : "adriano"
});

const nr_qtd_database = 24;

describe(
    'Teste Servico Mysql',
    function() {

        describe(
            '#getDatabases(objConexao)',
            function() {
                console.log('Esta aqui');

                it(
                    'Total de databases',
                    function(done) {
                        mysql.getDatabases(
                            objConnectionBaseA
                        ).then(
                            function(arrResultadoA) {
                                assert.equal(
                                    arrResultadoA.length,
                                    nr_qtd_database
                                );

                                assert.equal(
                                    arrResultadoA[0].ds_nome,
                                    'information_schema'
                                );

                                done();
                            }
                        ).catch(
                            function (objError) {
                                console.log(objError);
                                done();
                            }
                        );
                    }
                );
            }
        );
    }
);