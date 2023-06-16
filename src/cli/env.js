const parseEnv = () => {
    // Write your code here 
    const prefix = 'RSS_';
    
    const envVars = process.env;

    for(let key of Object.keys(envVars)) {
        if(key.startsWith(prefix)) {
            console.log(`${key}=${envVars[key]}`);
        }
    }
};

parseEnv();