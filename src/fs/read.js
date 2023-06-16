import { access, readFile } from 'node:fs/promises';
import path from 'path';
import url from 'url';

const read = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const readFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const isReadFileExist = await access(readFilePath)
        .then(() => true)
        .catch(() => false);

    try {   
        if(isReadFileExist) {
            const file = await readFile(readFilePath, 'utf-8');
            console.log(file);
        } else {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.error(error);
    }
};

await read();