'use strict';

const stream = require('readable-stream');
const Udpd = require('./udpd');

const MetricsEmitter = class MetricsEmitter extends stream.Transform {
    constructor(type = 'udp', options = {}) {
        super({ objectMode: true, });

        let transport;
        if (type === 'udp') {
            transport = new Udpd(options);
        } else {
            throw new Error(`Transport type "${type || 'undefined'}" is not supported.`);
        }

        Object.defineProperty(this, 'client', {
            value: transport,
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
