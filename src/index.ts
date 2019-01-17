import { Server } from "net";

export default function(server: Server) {
  const address = server.address();
  // address can be null which is an "object"
  if (address && typeof address === 'object') {
    // IP socket
    const host = address.family === 'IPv6' ? `[${address.address}]` : address.address;
    const port = address.port;
    return `http://${host}:${port}`;
  } else {
    // UNIX socket
    return address;
  }
}
