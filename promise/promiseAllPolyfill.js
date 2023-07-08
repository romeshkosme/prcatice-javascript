const customPromiseAll = function(taskList) {
    const results = [];
    let promiseCompleted = 0;
    return new Promise((resolve, reject) => {
        taskList.forEach((promise, index) => {
            promise.then((val) => {
                results.push(val);
                promiseCompleted++;
                if (promiseCompleted === taskList.length) {
                    resolve(results)
                }
            }).catch((err) => reject(err));
        });
    })
}

function task(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 3000) {
                resolve(`resolve timer - ${time} ms`)
            } else {
                reject(`reject timer - ${time} ms`)
            }
        }, time)
    })
}

const taskList = [task(3000), task(5000), task(1000)]

customPromiseAll(taskList).then((val) => {
    console.log("last success - ", val)
}).catch((err) => console.log("lastt err - ", err))