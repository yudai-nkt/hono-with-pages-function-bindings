# Hono with Pages Functions bindings

Minimal repro for honojs/hono#802

## Steps to reproduce

### Set up

```console
$ git clone https://github.com/yudai-nkt/hono-with-pages-function-bindings.git
$ cd cloudflare-pages-etude
$ npm ci
$ npx wrangler kv:namespace create KV_FOR_REPRO --preview # and follow the instruction
```

### Cloudflare Pages Functions

```console
$ npm run dev:pages
$ curl http://localhost:8788/api/raw # expected
Without Hono!
$ curl http://localhost:8788/api/hono # not expected
Internal Server Error
```

### Cloudflare Workers

```console
$ npm run dev:workers
$ curl http://localhost:8787/api/hono # expected
With Hono!
```

## License

MIT
