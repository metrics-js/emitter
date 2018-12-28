'use strict';

const stream = require('readable-stream');
const Emitter = require('../');

const src = new stream.Readable({
    objectMode: true,
    read() {
        // do nothing here
    },
});

const emitter = new Emitter();
src.pipe(emitter);

let counter = 0;
setInterval(() => {
    const msg = {
        name: 'foo',
        description: 'bar',
        value: counter,
        timestamp: Date.now() / 1000,
    }
    src.push(msg);

    counter += 1;
}, 1000);
