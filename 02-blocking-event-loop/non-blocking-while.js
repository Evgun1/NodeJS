const fs = require('fs');

let isRuning = true;

setTimeout(() => (isRuning = false), 100);
process.nextTick(() => console.log('next tick'));

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());

        // with resolve() we wtay on the same event loop iteration
        // resolve()
    });
}

async function whileLoop() {
    while (isRuning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));
