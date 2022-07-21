# ory-deno-repro

Reproduction of a simple web server using the Ory SDK to demonstrate Axios incompatibility.

## Running

Start up Ory proxy for `http://localhost:3000` and run the deno server with `deno run --allow-net server.ts`

## Axios errors

Although skypack converts Axios to ESM for compatibility, it cannot change Axios' implementation using XHR, which Deno [don't and won't](https://github.com/denoland/deno/issues/2191#issuecomment-502367556) support. It might be possible to polyfill or used with a fetch adapter.

Running the server results in the following error in the ory-sdk `toSession` function.

```bash
TypeError: adapter is not a function
    at dispatchRequest2 (https://cdn.skypack.dev/-/axios@v0.21.4-66TDYaHQZf9OXMAPUc8F/dist=es2019,mode=imports/optimized/axios.js:817:10)
    at Axios.request (https://cdn.skypack.dev/-/axios@v0.21.4-66TDYaHQZf9OXMAPUc8F/dist=es2019,mode=imports/optimized/axios.js:1138:15)
    at Function.wrap [as request] (https://cdn.skypack.dev/-/axios@v0.21.4-66TDYaHQZf9OXMAPUc8F/dist=es2019,mode=imports/optimized/axios.js:7:15)
    at https://cdn.skypack.dev/-/@ory/client@v0.0.1-alpha.189-8kvxxSwUSup52hWThGR9/dist=es2019,mode=imports/optimized/@ory/client.js:140:21
    at https://cdn.skypack.dev/-/@ory/client@v0.0.1-alpha.189-8kvxxSwUSup52hWThGR9/dist=es2019,mode=imports/optimized/@ory/client.js:2288:116
    at async Server.#respond (https://deno.land/std@0.149.0/http/server.ts:298:18)
```
