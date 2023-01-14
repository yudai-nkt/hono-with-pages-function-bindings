# Hono with Pages Functions bindings

Minimal repro for honojs/hono#802

## Steps to reproduce

```console
$ git clone https://github.com/yudai-nkt/hono-with-pages-function-bindings.git
$ cd cloudflare-pages-etude
$ npm ci
$ npx wrangler kv:namespace create KV_FOR_REPRO --preview # and follow the instruction
$ npm start
```

## License

MIT
