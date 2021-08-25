export function helpMessage() {
    const text = Deno.readTextFileSync("cli/available-commands.txt");
    console.log(text);
  }
  