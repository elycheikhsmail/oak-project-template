import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";

export function indexController(ctx: Context) {
  ctx.response.body = "<h1> hi from todoControler </h1>";
  ctx.response.headers.append(
    "content-type",
    "text/html",
  );
}
