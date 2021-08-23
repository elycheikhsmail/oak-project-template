import { Context } from "https://deno.land/x/oak@v7.7.0/mod.ts";

export function indexController(ctx: Context) {
  ctx.response.body = {
    details: "hi from todoControler",
  };
}
