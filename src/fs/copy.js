import { mkdir, readdir, access, copyFile } from 'node:fs/promises';
import path from 'path';
import url from 'url';


const copy = async () => {
    // Write your code here
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const isExist = async path => await access(path)
        .then(() => true)
        .catch(() => false);

    const pathFrom = path.join(__dirname, 'files');
    const pathTo = path.join(__dirname, 'files_copy');

    const isFilesDirExist = await isExist(pathFrom);
    const isCopyFileDirExist = await isExist(pathTo);

    try {
        if (!isFilesDirExist || isCopyFileDirExist) {
            throw new Error('FS operation failed')
        }
        await mkdir(pathTo, { recursive: true });

        const files = await readdir(pathFrom, { withFileTypes: true });
        for (let file of files) {
            copyFile(path.join(pathFrom, file.name), path.join(pathTo, file.name));
        }
    } catch (error) {
        console.error(error);
    }
};

await copy();
