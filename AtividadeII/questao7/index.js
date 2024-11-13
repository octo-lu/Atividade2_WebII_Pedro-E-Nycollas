//Essa eu precisei consultar uma solução no stackoverflow

function promise(timeout, callback) {
    return new Promise((resolve, reject) => {
        
        const timer = setTimeout(() => {
            reject(new Error(`Promise rejeitada após ${timeout} ms`));
        }, timeout);

        
        callback(
            (value) => {
                clearTimeout(timer);
                resolve(value);
            },
            (error) => {
                clearTimeout(timer);
                reject(error);
            }
        );
    });
}

promise(2000, (resolve, reject) => {});