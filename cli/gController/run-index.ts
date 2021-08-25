import { IgController,methods } from "./args.ts";
import { gController } from "./fn.ts";
const cArgIndex:IgController = {
    appName:"example",
    controllerName:"index",
    contollerMethod:methods.get,
    controllerUrlPrefix:"/"
}

export function runGenerateIndexController(){
    gController(cArgIndex)
}
