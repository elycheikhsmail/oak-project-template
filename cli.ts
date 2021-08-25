// run the folowing command to see all available commandes
// deno run --allow-all  --unstable cli.ts

import { helpMessage } from "./cli/helpers/help-message.ts";  
import { run as rungDefaultAddRoutes } from "./cli/gDefaultAddRoute/run.ts";  
import { fn as buildApp } from "./cli/gApp/fn.ts";
import { gController as buildController } from "./cli/gController/fn.ts";
import { methodsArrays } from "./cli/gController/args.ts"; 

let isDone = false;

if (!isDone && Deno.args.length == 1 && Deno.args[0] == "-h") {
  isDone = true;
  helpMessage();
}

// if (!isDone && Deno.args.length == 1 && Deno.args[0] == "gController") {
//   isDone = true;
//   runGController();
// }

if (!isDone && Deno.args.length == 5 && Deno.args[0] == "gController") {
  isDone = true;
  console.log(Deno.args[3]);
  const a = methodsArrays.filter(
    (v) => v == Deno.args[3],
  );
  if (a.length == 1) {
    buildController({
      appName: Deno.args[1],
      controllerName: Deno.args[2],
      contollerMethod: Deno.args[3],
      controllerUrlPrefix: Deno.args[4],
    });
  } else {
    console.log("invalide http method");
  }
}

// if (!isDone && Deno.args.length == 1 && Deno.args[0] == "gApp") {
//   isDone = true;
//   runGApp();
// }

if (!isDone && Deno.args.length == 3 && Deno.args[0] == "gApp") {
  isDone = true;
  buildApp({
    appName: Deno.args[1],
    appUrlPrefix: Deno.args[2],
  });
  buildController({
    appName: Deno.args[1],
    controllerName: "index",
    contollerMethod: "get",
    controllerUrlPrefix: "/",
  });
}

 

if (!isDone && Deno.args.length == 1 && Deno.args[0] == "gexample") {
  isDone = true;
  Deno.removeSync("./app-example", { recursive: true });
  Deno.removeSync("./server/add-routes.ts");
  rungDefaultAddRoutes(); 
  buildApp({
    appName: "example",
    appUrlPrefix: "/",
  });
  buildController({
    appName:  "example",
    controllerName: "index",
    contollerMethod: "get",
    controllerUrlPrefix: "/",
  }); 
}

if (!isDone) {
  helpMessage();
}
// deno run --allow-all  --unstable cli.ts
