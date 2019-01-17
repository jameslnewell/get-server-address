# get-server-address

[![CircleCI](https://circleci.com/gh/jameslnewell/get-server-address.svg?style=svg)](https://circleci.com/gh/jameslnewell/get-server-address)

Get the address of a server.

## Installation

```
yarn
```

## Usage

The following code will output: `Listening at http://[::]:8888`.

```js
import {createServer} from 'http';

const server = createServer();

server.listen(8888, () => {
  const address = getServerAddress(server);
  console.log(`Listening at ${address}`);
});

```

> Will work with `express`, `connect` or any other server that imitates `Server` from the `net` module.