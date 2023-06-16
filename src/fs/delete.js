import { access, unlink } from 'node:fs/promises';
import path from 'path';
import url from 'url';

const remove = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const fileToRemove = 'fileToRemove.txt';
    const fileToRemovePath = path.join(__dirname, 'files', fileToRemove);

    const isFileExist = await access(fileToRemovePath)
        .then(() => true)
        .catch(() => false);
    
    try {
        if(isFileExist) {
            await unlink(fileToRemovePath);
        } else {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.error(error);
    }
};

await remove();