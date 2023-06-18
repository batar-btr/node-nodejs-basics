import { createWriteStream } from 'fs';
import { Transform } from 'stream';
import { stdin, stdout } from 'process'

const write = async () => {
    // Write your code here 
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reverseText = chunk.toString().split('').reverse().join('') + '\n';
            this.push(reverseText);
            callback();
        }
    })
    stdin.pipe(transformStream).pipe(stdout);
};

await write();