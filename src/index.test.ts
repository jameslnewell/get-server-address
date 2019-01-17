import {createServer, Server} from 'http';
import getServerAddress from '.';

describe('get-server-address', () => {
  let server: Server | undefined;

  afterEach(() => new Promise((resolve) => {
    if (server) {
      server.close(resolve);
    } else {
      resolve();
    }
  }))

  it('should return http://127.0.0.1:8888 for IPv4', (done) => {
    expect.assertions(1);  
    server = createServer();
    server.listen(8888, '127.0.0.1', () => {
      if (server) {
        const address = getServerAddress(server);
        expect(address).toEqual('http://127.0.0.1:8888');
        done();
      }
    });
  });

  it('should return http://[::]:8888 for IPv6', (done) => {
    expect.assertions(1);
    server = createServer();
    server.listen(8888, '::', () => {
      if (server) {
        const address = getServerAddress(server);
        expect(address).toEqual('http://[::]:8888');
        done();
      }
    });
  });

  it('should return ./server.sock for a unix socket', (done) => {
    expect.assertions(1);
    server = createServer();
    server.listen('./server.sock', () => {
      if (server) {
        const address = getServerAddress(server);
        expect(address).toEqual('./server.sock');
        done();
      }
    });
  });

});
