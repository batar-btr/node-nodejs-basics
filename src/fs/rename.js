import { access, rename as fsRename } from 'node:fs/promises';
import path from 'path';
import url from 'url';

const rename = async () => {

    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


    const oldName = 'wrongFilename.txt';
    const newName = 'properFilename.md';

    const newFilePath = path.join(__dirname, 'files', newName);
    const oldFilePath = path.join(__dirname, 'files', oldName);

    const isExist = async path => await access(path)
        .then(() => true)
        .catch(() => false);

    const isNewFileExist = await isExist(newFilePath);
    const isOldFileExist = await isExist(oldFilePath);

    try {
        if (isNewFileExist || !isOldFileExist) {
            throw new Error('FS operation failed ');
        } else {
            await fsRename(oldFilePath, newFilePath);
        }
    } catch (error) {
        console.error(error);
    }
};

await rename();