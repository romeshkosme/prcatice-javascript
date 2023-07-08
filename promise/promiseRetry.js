const testPromise = () => {
    let count = 0;

    return () => {
        return new Promise((resolve, reject) => {
            count++;
            if(count <= 5) {
                reject(" Failed api!")
            } else {
                resolve("Success api!")
            }
        })
    }
}

const retry = (fn, retries, finalError) => {
    return new Promise((resolve, reject) => {
        fn().then(resolve, (err) => {
            if (retries === 1) {
                reject(finalError);
            }

            retry(fn, retries - 1, finalError).then(resolve, reject);
        })
    });
}

retry(testPromise(), 6, "I'm failure").then((val) => console.log("val - ", val)).catch((err) => console.log("err - ", err));