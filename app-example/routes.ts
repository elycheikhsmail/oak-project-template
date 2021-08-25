import { Context, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
const routes = new Router(); 

//  
import { indexController } from "./controller/index.controller.ts";
routes.get("/", async (ctx: Context) => await indexController(ctx));
export { routes };