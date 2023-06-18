import { createGunzip } from 'zlib';
import path from 'path';
import { pipeline } from 'stream';
import url from 'url';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const sourcePath = path.join(__dirname, 'files', 'archive.gz');
    const destinationPath = path.join(__dirname,'files','fileToCompress.txt');
    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);
    const gunZip = createGunzip();

    pipeline(readStream, gunZip, writeStream, (err)=> {
        err && console.error(err);
    })
};

await decompress();