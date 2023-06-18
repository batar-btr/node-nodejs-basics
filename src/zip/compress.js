import { createGzip } from 'zlib';
import path from 'path';
import { pipeline } from 'stream';
import url from 'url';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destinationPath = path.join(__dirname, 'files', 'archive.gz');

    const sourceStream = createReadStream(sourcePath);
    const destinationStream = createWriteStream(destinationPath);

    const gzip = createGzip();

    pipeline(sourceStream, gzip, destinationStream, (err) => {
        err && console.error(err);
    })
};

await compress();