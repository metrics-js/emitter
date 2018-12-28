'use strict';

const dgram = require('dgram');
const stream = require('readable-stream');

const MetricsEmitterUdpd = class MetricsEmitterUdpd extends stream.Writable {
    constructor({ port = 40400, address } = {}) {
        super({ objectMode: true, });

        Object.defineProperty(this, 'socket', {
            value: dgram.createSocket('udp4'),
        });

        Object.defineProperty(this, 'address', {
            value: address,
        });

        Object.defineProperty(this, 'port', {
            value: port,
        });
    }

    get [Symbol.toStringTag]() {
        return 'MetricsEmitterUdpd';
    }

    _write(chunk, encoding, callback) {
        const buff = Buffer.from(JSON.stringify(chunk));
        this.socket.send(buff, 0, buff.length, this.port, this.address, callback);
    }
};

module.exports = MetricsEmitterUdpd;
