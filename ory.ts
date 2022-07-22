import { sdk } from "./deps.ts";

const baseServer = new sdk.ServerConfiguration(
  "http://localhost:4000/.ory",
  {},
);

const configuration = sdk.createConfiguration({ baseServer });
const ory = new sdk.V0alpha2Api(configuration);

export { ory };
