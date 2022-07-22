import { serve } from "./deps.ts";
import { ory } from "./ory.ts";

const port = 3000;

const handler = async (request: Request): Promise<Response> => {
  try {
    const session = await ory
      .toSession(undefined, request.headers.get("cookie") ?? undefined);

    // Log session for debugging purposes
    console.info(session);

    // Return identity object
    return Response.json(JSON.stringify(session?.identity));
  } catch (e) {
    // Log error for debugging purposes
    console.error(e);

    // Redirect to login
    return Response.redirect("http://localhost:4000/.ory/ui/login");
  }
};

console.log(`HTTP webserver running. Access it at: http://localhost:3000/`);
await serve(handler, { port });
