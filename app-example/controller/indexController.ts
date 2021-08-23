//  generate by running  oakcli g c example
import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";

// deno-lint-ignore require-await
export async function indexController(ctx: Context) {
  ctx.response.body = "<h1> hi from app-example/indexControler </h1>";

  ctx.response.headers.append(
    "content-type",
    "text/html",
  );


}
