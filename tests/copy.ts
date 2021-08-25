import { copy, copySync } from "https://deno.land/std@0.106.0/fs/mod.ts";

//copy("./foo", "./bar"); // returns a promise
copySync("./foo", "./bar"); // void
//copySync("./foo", "./existingFolder", { overwrite: true });
// Will overwrite existingFolder

// deno run --allow-all --unstable copy.ts
 