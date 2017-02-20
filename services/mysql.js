function execQuery(
    objConexao,
    ds_query,
    fnCallBackResult
) {
    return new Promise(
        function (resolve, reject) {
            objConexao.connect();

            objConexao.query(
                ds_query,
                function (error, arrColunas) {
                    objConexao.end();

                    if (error){
                        reject(error);
                        return;
                    }

                    resolve(
                        fnCallBackResult(
                            arrColunas,
                            resolve,
                            reject
                        )
                    );
                }
            );
        }
    );
}

function getDatabases(objConexao) {
    var ds_query = 'SHOW DATABASES';

    var fnCallBack = function(
        arrValores,
        resolve,
        reject
    ) {
        var arrDatabases  = arrValores.map(
            function(objColuna) {
                return {
                    ds_nome : objColuna.Database
                };
            }
        );

        resolve(arrDatabases);
    }

    return execQuery(
        objConexao,
        ds_query,
        fnCallBack
    );
}

module.exports = {
    getDatabases: getDatabases
};