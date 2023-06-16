import { readFile } from 'node:fs/promises';
import crypto from 'crypto';
import path from 'path';
import url from 'url';

const calculateHash = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const fileName = 'fileToCalculateHashFor.txt';
    const filePath = path.join(__dirname, 'files', fileName );

    const data = await readFile(filePath, 'utf-8');
    const hash = crypto.createHash('sha256');
    hash.update(data);
    console.log(hash.digest('hex'));
};

await calculateHash();