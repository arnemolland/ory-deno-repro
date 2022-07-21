import { serve } from "./deps.ts";
import { ory } from "./ory.ts";

const port = 3000;

const handler = (request: Request): Response => {
  return ory
    .toSession(undefined, request.headers.get("cookie"))
    .then(({ data: session }: { data: { identity?: unknown } }) => {
      return Response.json(JSON.stringify(session.identity));
    })
    .catch((e: unknown) => {
      console.error(e);
      // If logged out, send to login page
      return Response.redirect("http://localhost:4000/.ory/ui/login");
    });
};

console.log(`HTTP webserver running. Access it at: http://localhost:3000/`);
await serve(handler, { port });
