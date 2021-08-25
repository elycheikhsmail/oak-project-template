import { IgController } from "./args.ts";
// dunjucks
import nunjucks from "https://deno.land/x/nunjucks@3.2.3/mod.js";
export function gController(c: IgController) {
  // passer les params au template
  let appNameCapital = c.appName
  const f = appNameCapital.charAt(0).toUpperCase() 
  appNameCapital = f + appNameCapital.slice(1)
  c.appName = "app-" + c.appName;

  nunjucks.renderString("cHtml.j2", c);
  try {
    // controller file
    let text = nunjucks.render("cli/gController/views/cHtml.j2", c); 
    Deno.writeTextFileSync(
      `${c.appName}/controller/${c.controllerName}.controller.ts`,
      text,
    );
    // routes.ts fil
    const exportTextStatament = "export { routes };"
    text = Deno.readTextFileSync(`${c.appName}/routes.ts`);
    text = text.replaceAll(exportTextStatament, "");
    const addControlerText = nunjucks.render(
      "cli/gController/views/add-controller.j2",
      c,
    ); 
    text += addControlerText;
    text += exportTextStatament 
    Deno.writeTextFileSync(`${c.appName}/routes.ts`, text);
    console.log("controller is build succeffuly")
  } catch (error) {
    console.log(error);
  }
}
