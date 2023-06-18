import { createWriteStream } from 'fs';
import path from 'path';
import url from 'url';
import { stdin, stdout } from 'process'

const write = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = createWriteStream(filePath); 
    stdin.on('data', data => writableStream.write(data) );
};

await write();