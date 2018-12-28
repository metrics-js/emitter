'use strict';

const stream = require('readable-stream');
const Udpd = require('./udpd');

const MetricsEmitter = class MetricsEmitter extends stream.Transform {
    constructor() {
        super({ objectMode: true, });

        Object.defineProperty(this, 'client', {
            value: new Udpd(),
        });

        this.pipe(this.client);
    }

    get [Symbol.toStringTag]() {
        return 'MetricsEmitter';
    }

    _transform(metric, enc, next) {
        next(null, metric);
    }
};

module.exports = MetricsEmitter;
