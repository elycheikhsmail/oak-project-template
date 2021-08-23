

import { app } from "./add-middlares-befor.ts";
// add routes here

//import route
import {  routes as exampleRoutes } from "../app-example/mod.ts";
app.use(exampleRoutes.routes())
app.use(exampleRoutes.allowedMethods())
//end import route







// end routes
export{app}