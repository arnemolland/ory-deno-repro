# ory-deno-repro

Reproduction of a simple web server using the Ory SDK to demonstrate Axios incompatibility.

## Running

Start up Ory proxy for `http://localhost:3000` and run the deno server with `deno run --allow-net server.ts`

## Generated SDK

This branch contains a compatible Ory SDK generated with the following options:

```bash
openapi-generator-cli generate -i ${INPUT_SCHEMA} -g typescript --additional-properties=platform=deno -o ${OUTPUT_FOLDER}
```

Would likely work with the `--additional-properties` set to `node` or omitted, but harder to test locally as we would need a CDN to convert generated package to fully specified ESM imports (e.g. `import foo from "./foo/index.ts"` as `import foo from "./foo"` is not supported)
