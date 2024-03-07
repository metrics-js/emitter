"use strict";

const Client = require("@metrics/client");
const Emitter = require("../");

const emitter = new Emitter("udp");
const client = new Client();

client.pipe(emitter);

let counter = 0;
setInterval(() => {
	client.metric({
		name: "foo",
		description: "bar",
		value: counter,
	});

	counter += 1;
}, 1000);
