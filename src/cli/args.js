const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    args.forEach((arg, idx) => {
        if (arg.startsWith('--')) {
            console.log(`${arg} is ${args[idx + 1]}`);
        }
    })
};

parseArgs();