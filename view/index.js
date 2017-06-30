var App = angular.module(
    'main_app',
    [
        'treeControl'
    ]
);

App.controller(
    'Controller',
    [
        '$scope',
        '$http',
        '$parse',
        'filterFilter',
        createController
    ]
);


function createController(
    $scope,
    $http,
    $parse,
    filterFilter
) {
    console.log('criado');

    $scope.variavel = "adriano";

    $scope.treeOptions = {
        nodeChildren: "children",
        dirSelectable: true,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
        }
    }

    $scope.dataForTheTree =
    [
        {
            "name" : "Localhost",
            "children" : [
                {
                    "id" : "1",
                    "name" : "Tabela 1"
                }
            ],
        },
        {
            "name" : "Localhost 2",
            "children" : [
                {
                    "id" : "2",
                    "name" : "Tabela 1",
                },
                {
                    "id" : "3",
                    "name" : "Tabela 2",
                },
            ],
        }
    ];

    $scope.showSelected = function(obj) {
        console.log(obj);
    }

    $scope.getTabelas = function()
    {
        const {remote} = require('electron');
        var valor = remote.getGlobal('sharedObj').myvar();

        valor.then(
            function(arrResultado) {
                $scope.dataForTheTree = new Array();

                angular.forEach(
                    arrResultado,
                    function(value, key) {
                        $scope.dataForTheTree.push(
                            {
                                "id" : key,
                                "name" : value.ds_nome
                            }
                        );
                    }
                );
            }
        );
    }
}