import { fork } from 'child_process';
import url from 'url';
import path from 'path';

const spawnChildProcess = async (args) => {
    // Write your code here
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'script.js');

    const child = fork(filePath, args, {
        stdio: [process.stdin, process.stdout, 'ipc']
    });
    
    child.on('error', (err) => {
        // This will be called with err being an AbortError if the controller aborts
        console.error(err);
    });

};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1,2,3,4]);
