const readline = require('readline');
//const notifier = require('node-notifier');
//const path = require('path');

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
    if(message.length === 0){
        return;
    }

    document.getElementById("currentAction").value = message;
});

// yarn install
// https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/