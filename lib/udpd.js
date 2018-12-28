'use strict';

const dgram = require('dgram');
const stream = require('readable-stream');

const MetricsEmitterUdpd = class MetricsEmitterUdpd extends stream.Writable {
	constructor() {
        super({ objectMode: true, });

        Object.defineProperty(this, 'socket', {
            value: dgram.createSocket('udp4'),
        });

        Object.defineProperty(this, 'port', {
            value: 6667,
        });

        Object.defineProperty(this, 'host', {
            value: 'localhost',
        });
	}

    get [Symbol.toStringTag]() {
        return 'MetricsEmitterUdpd';
    }

	_write(chunk, encoding, callback) {
		const buff = Buffer.from(JSON.stringify(chunk));
		this.socket.send(buff, 0, buff.length, this.port, this.host, callback);
	}
};

module.exports = MetricsEmitterUdpd;
