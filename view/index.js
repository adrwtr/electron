/*var remote = require('electron').remote;
var Menu = remote.Menu;

// recupera a função la do main
const main = remote.require('./main.js');

const menu = Menu.buildFromTemplate(
    [
        {
            label: 'Meu Menu',
            submenu: [
                {
                    label: 'Mensagem no Log',
                    click () {
                        console.log('Mensagem!!!!');
                        ipcRenderer.send('asynchronous-message', 'minha mensagem que venho do render');
                    }
                },
                {
                    label: 'Abrir Janela',
                    click () {
                        main.openNewWindow();
                    }
                },

            ]
        }
    ]
)

Menu.setApplicationMenu(menu);
*/

/**
 * Mensagem do render para o main
 */
// In renderer process (web page).
/*const {ipcRenderer} = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log('from render: ' + arg) // prints "pong"
})*/


console.log('aqui');

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
    { "name" : "Joe", "age" : "21", "children" : [
        { "name" : "Smith", "age" : "42", "children" : [] },
        { "name" : "Gary", "age" : "21", "children" : [
            { "name" : "Jenifer", "age" : "23", "children" : [
                { "name" : "Dani", "age" : "32", "children" : [] },
                { "name" : "Max", "age" : "34", "children" : [] }
            ]}
        ]}
    ]},
    { "name" : "Albert", "age" : "33", "children" : [] },
    { "name" : "Ron", "age" : "29", "children" : [] }
];
}