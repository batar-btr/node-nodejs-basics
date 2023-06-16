import { writeFile, access } from 'node:fs/promises';
import * as url from 'url';
import * as path from 'path';

const create = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const fileName = 'fresh.txt';
    const fileData = 'I am fresh and young'

    const freshFilePath = path.join(__dirname, 'files', fileName);

    const isFileExist = await access(freshFilePath)
        .then(() => true)
        .catch(() => false)

    try {
        if(isFileExist) {
            throw new Error('FS operation failed');
        } else {
            writeFile(freshFilePath, fileData);
        }
    } catch (error) {
        console.error(error)
    }
};

await create();