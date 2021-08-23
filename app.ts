// for start app run this code
// deno run --allow-all app.ts
// or see cli.md
function compareDenoVersion(denoSupportedVersion:string){
    const { deno } = Deno.version
    console.log("deno version : ", deno)
    if(deno != denoSupportedVersion){
        let str = ""
        str += "you are using deno version : "+deno+"\n"
        str += "this project code is tested with deno verion : "+denoSupportedVersion+"\n"
        str += "if this project dont work for you open issues on github"
        console.log(str)
    }  
    
}

compareDenoVersion("1.13.1")

 

import { app } from "./server/add-middlwares-after.ts";
import { parse } from "https://deno.land/std@0.105.0/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 3000;
const argPort = parse(args).port;
console.log({argPort})

const port =argPort ? Number(argPort) : DEFAULT_PORT 
console.log({port}) 

await app.listen({ port });

// deno run --allow-all app.ts