// for start app run this code
// deno run --allow-all app.ts
// or see cli.md

import { settings } from "./config/mod.ts";
settings.compareDenoVersion(settings.denoSupportedVersion)
 
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