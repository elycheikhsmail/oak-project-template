import { Context, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
const routes = new Router();
// import controller there 
import { helloController } from "./controller/helloController.ts";




// link routers and cond controllers
routes.get("/", async (ctx: Context) => await helloController(ctx));
 







export { routes };













