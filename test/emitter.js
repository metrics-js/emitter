'use strict';

const tap = require('tap');
// const stream = require('readable-stream');
const Emitter = require('../');
/*
const destObjectStream = (done) => {
    const arr = [];

    const dStream = new stream.Writable({
        objectMode: true,
        write(chunk, encoding, callback) {
            arr.push(chunk);
            callback();
        },
    });

    dStream.on('finish', () => {
        done(arr);
    });

    return dStream;
};
*/
/**
 * Constructor
 */

tap.test('Constructor() - object type - should be MetricsEmitter', (t) => {
    const emitter = new Emitter();
    t.equal(Object.prototype.toString.call(emitter), '[object MetricsEmitter]');
    t.end();
});
