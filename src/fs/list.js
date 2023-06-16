import { access, readdir } from 'node:fs/promises';
import path from 'path';
import url from 'url';

const list = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filesPath = path.join(__dirname, 'files');

    const isFolderExist = await access(filesPath)
        .then(() => true)
        .catch(() => false);

    try {
        if(isFolderExist) {
            const filesNameArray = await readdir(filesPath, { withFileTypes: true});
            console.log(filesNameArray.map(dirent => dirent.name));
        } else {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.error(error);
    }

};

await list();