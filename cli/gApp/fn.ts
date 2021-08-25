import { IgApp } from "./args.ts";
import { copySync } from "https://deno.land/std@0.106.0/fs/mod.ts";
import nunjucks from "https://deno.land/x/nunjucks@3.2.3/mod.js";
 
export function fn(a:IgApp){
    // generate APP FUNCTION
    const appName1 = a.appName

    a.appName = "app-"+a.appName  
    try {

        copySync("./cli/gApp/views/app-template", a.appName);
        let text =""
        // read server/add-middlwares-after.ts file content
        text = Deno.readTextFileSync(`server/add-routes.ts`)
        // update server/add-middlwares-after.ts file content,
        //  remove  ... export{app}
        text = text.replaceAll("export{app}","")
        // append urlprefix
        const appRouteText = nunjucks.render("cli/gApp/views/add-route/add-route.j2",{appName1,appName:a.appName,urlPrefix:a.appUrlPrefix})
        text += appRouteText
        // append ...
        text += `
export{app}
        `
        // rewrite the file content
        Deno.writeTextFileSync(`server/add-routes.ts`,text)

    
        console.log("app is build succeffuly")
    } catch (error) {
        console.log(" task failed ")
        console.log(error)
    }
    
   

}