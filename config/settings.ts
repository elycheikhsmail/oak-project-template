import {compareDenoVersion  } from "./helpers/check-deno-version.ts";
const settings = {
    siteSrc:[
        "https://deno.land"
    ],
    denoSupportedVersion : "1.13.1",
    compareDenoVersion
}


export{
    settings
}