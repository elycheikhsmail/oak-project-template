import { Context } from "../deps-managed.ts";

// deno-lint-ignore require-await
export async function indexController(ctx: Context) {
  ctx.response.body = "<h1> hi from <br>|-- app-example <br> |---- indexControler </h1>";

  ctx.response.headers.append(
    "content-type",
    "text/html",
  );


}
