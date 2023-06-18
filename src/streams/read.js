import { createReadStream } from 'fs';
import path from 'path';
import url from 'url';
import { stdout } from 'process'

const read = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = createReadStream(filePath, 'utf-8');
    readableStream.on('data', chunk => stdout.write(chunk));
};

await read();