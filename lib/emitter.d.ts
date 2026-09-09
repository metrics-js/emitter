import { Transform } from 'stream';

interface EmitterOptions {
    port?: number | string;
    address?: string;
}

declare class MetricsEmitter extends Transform {
    constructor(transport?: 'udp', options?: EmitterOptions);
}

export = MetricsEmitter;
