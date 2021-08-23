export function compareDenoVersion(denoSupportedVersion:string){
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