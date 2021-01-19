const { app, BrowserWindow } = require('electron');
const readline = require('readline');
let publicWin;

function createWindow () {
    publicWin = new BrowserWindow({
        width: 400,
        height: 150,
        x: 0,
        y: 0,
        resizable: false,
        movable: false,
        alwaysOnTop: true,
        backgroundColor: '#bfd4e0',
        webPreferences: {
            nodeIntegration: true
        }
    })

    publicWin.loadFile('index.html')
    //publicWin.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    var message = '';
    if (key.ctrl && key.name === 'c') {
        process.exit();
    }
    else if(key.name === '0'){
        message = 'KAMERA 100%'
    }
    else if(key.name === '1'){
        message = 'PREZENTACJA'
    }
    else if(key.name === '7'){
        message = 'OCZEKIWANIE'
    }
    else if(key.name === '8'){
        message = 'ZAKOŃCZENIE'
    }

    console.log(key);

    publicWin.webContents.send('store-data', {
        'message': message
    });
});

