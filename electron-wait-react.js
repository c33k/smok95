const net = require('net');

// Foreman offsets the port number by 100 for processes
// of different types. That's why we subtract 100 here...
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

process.env.SMOK_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port: port}, () => {
        client.end();
        if(!startedElectron) {
            console.log('starting electron');
            startedElectron = true;
            const exec = require('child_process').exec;
            exec('yarn start-electron');
        }
    }
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});