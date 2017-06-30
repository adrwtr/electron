const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const objMysql = require('mysql');
const mysql = require('./services/mysql.js');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(
        url.format(
            {
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
            }
        )
    );

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on(
        'closed',
        function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
        }
    );
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on(
    'window-all-closed',
    function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    }
);

app.on(
    'activate',
    function () {
        if (mainWindow === null) {
            createWindow()
        }
    }
);

exports.openNewWindow = function() {
    var win = new BrowserWindow(
        {
            width: 800,
            height: 600,
            parent: mainWindow,
            modal: true,
            show: true
        }
    );

    win.on('closed', () => {
      win = null
    });

    win.loadURL(
        path.join(__dirname, 'janela2.html')
    );
}


/**
 * Mensagens do main para o render
 */
const {ipcMain} = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong valor retornado 2')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.returnValue = 'pong valor retornado'
})




global.sharedObj = {
    myvar: function() {

        const objConnectionBaseA = objMysql.createConnection({
            host     : "localhost",
            user     : "backup",
            password : "UniSeguro",
            database : "adriano"
        });

        return mysql.getDatabases(
            objConnectionBaseA
        );
        // return "aqui"
    }
};