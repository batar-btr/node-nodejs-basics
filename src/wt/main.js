import { Worker } from 'worker_threads'
import { cpus } from "os";
import url from 'url';
import path from 'path';

const performCalculations = async () => {
    // Write your code here
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const CPU_CORES = cpus();
    const WORKER_PATH = path.join(__dirname, 'worker.js');
    const BASE_NUM = 10;

    const customWorker = (num) => new Promise((res, rej) => {
        const worker = new Worker(WORKER_PATH, {
            workerData: num
        });
        worker.on('message', data => res({ status: 'resolved', data }));
        worker.on('error', () => rej({ status: 'error', data: null }));
        worker.on('exit', (code) => {
            if (code !== 0)
                rej(new Error(`Worker stopped with exit code ${code}`));
        });
    })

    const result = await Promise.allSettled(CPU_CORES.map((core, idx) => customWorker(BASE_NUM + idx)));
    // const result = await Promise.allSettled(CPU_CORES.map((core, idx) => customWorker(idx === 3 ? 'test-error' : BASE_NUM + idx)));

    // IF YOU WANT TO CHECK RESULT WITH ERROR = PLEASE UNCOMMENT 26 STRING, AND COMMENT 25

    console.log(result.map(res => res?.value || res.reason));
};

await performCalculations();