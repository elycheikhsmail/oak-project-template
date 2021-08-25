import { urlOldToUrlNew } from "./types.ts"; 
export function migrateFile(filePath:string,migs:urlOldToUrlNew[]){

    let text = Deno.readTextFileSync(filePath) 
    for (const mig of migs) {
        text = text.replaceAll(mig.oldUrl,mig.newUrl)
    }

    Deno.writeTextFileSync(filePath,text)

}

export function migrateFileCancel(filePath:string,migs:urlOldToUrlNew[]){

    let text = Deno.readTextFileSync(filePath) 
    for (const mig of migs) {
        text = text.replaceAll(mig.newUrl,mig.oldUrl)
    }

    Deno.writeTextFileSync(filePath,text)

}

 
//migrateFile("code.ts",migArray)
//migrateFileCancel("code.ts",migArray) 
// deno run --allow-all updateUrl.ts