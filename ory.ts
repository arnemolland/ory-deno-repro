import { sdk } from "./deps.ts";

const ory: typeof sdk.V0alpha2Api = new sdk.V0alpha2Api(
  new sdk.Configuration({
    baseUrl: "/.ory",
  }),
);

export { ory };
