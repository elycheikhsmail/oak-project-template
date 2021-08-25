import {  IgApp} from "./args.ts";
import { fn } from "./fn.ts";

const aExampleArg:IgApp = {
    appName:"example",
    appUrlPrefix:"/"
    
}

export function runExampleApp(){
    fn(aExampleArg)
}
