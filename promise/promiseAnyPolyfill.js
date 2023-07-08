const customPromiseRace = function (taskList) {
    const promiseError = new Array(taskList.length);
    let counter = 0;
    return new Promise((resolve, reject) => {
        taskList.forEach(promise => {
            // Promise.resolve(promise).then(resolve)
            promise
                .then((val) => {
                    resolve(val)
                    return;
                })
                .catch(err => {
                    promiseError[counter] = err;
                    counter++;
                    if (counter === promiseError.length) reject(promiseError);
                })
        });
    })
}

function task(timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timer <= 1000) {
                resolve(`resolve: ${timer}`);
            } else {
                reject(`reject: ${timer}`);
            }
        }, timer);
    })
}

const taskList = [task(4000), task(1000), task(3000)]

customPromiseRace(taskList).then(val => {
    console.log(val)
}).catch(err => console.log("e  ",err))
