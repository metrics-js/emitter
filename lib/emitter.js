'use strict';

const stream = require('readable-stream');

const MetricsEmitter = class MetricsEmitter extends stream.Readable {
    constructor() {
        super({ objectMode: true, });
    }

    get [Symbol.toStringTag]() {
        return 'MetricsEmitter';
    }

    _read() {
        // nothiong to do, push happens in scheduler
    }
};

module.exports = MetricsEmitter;
