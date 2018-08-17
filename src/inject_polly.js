import { Polly } from '@pollyjs/core';
import XHRAdapter from '@pollyjs/adapter-xhr';
import FetchAdapter from '@pollyjs/adapter-fetch';
import LocalStoragePersister from '@pollyjs/persister-local-storage';

Polly.register(XHRAdapter);
Polly.register(FetchAdapter);
Polly.register(LocalStoragePersister);

const polly = new Polly('<Recording Name>', {
    adapters: ['xhr', 'fetch'],
    persister: 'local-storage',
    mode: 'record',
});

const { server } = polly;

server.any().on('request', () => {
    console.log('request');
});

setTimeout(() => {
    polly.stop();
    console.log('polly stop');
}, 20000);
