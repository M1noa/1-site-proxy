const Fastify = require('fastify');
const server = Fastify();

server.register(require('@fastify/http-proxy'), {
  upstream: 'https://artclass.site/',
  prefix: '/', 
  http2: false,
});

server.listen({host: "0.0.0.0", port: 3000 });

