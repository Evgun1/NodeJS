const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

console.log('Program start');

// Close events
fs.writeFile('./test.txt', 'hello nodejs', () => info('File written'));
// Promises
Promise.resolve().then(() => info('Promise 1'));

//Next Tick
process.nextTick(() => info('Next tick 1'));

// setImmediate(cheak)
setImmediate(() => info('Immediate 1'));

// Timeouts
setTimeout(() => info('Timeout 1'), 0);
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'));
    info('Timeout 2');
}, 100);

// Intervals
let internalCount = 0;
const internalId = setInterval(() => {
    info(`Interval ${(internalCount += 1)}`);
    if (internalCount === 2) clearInterval(internalId);
}, 50);

// I/O Events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost');
    Promise.resolve().then(() => info('Promise 2'));
    process.nextTick(() => info('Next tick 3'));
});

console.log('Program end');
