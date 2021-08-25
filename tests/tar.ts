import { Tar } from "https://deno.land/std@0.106.0/archive/tar.ts";
import { Buffer } from "https://deno.land/std@0.106.0/io/buffer.ts";
import { copy } from "https://deno.land/std@0.106.0/io/util.ts";

const tar = new Tar();

const content = new TextEncoder().encode("Deno.land");
await tar.append("deno.txt", {
  reader: new Buffer(content),
  contentSize: content.byteLength,
});

const content2 = new TextEncoder().encode("Deno.land");
await tar.append("deno2.txt", {
  reader: new Buffer(content2),
  contentSize: content2.byteLength,
});


// Or specifying a filePath.
// await tar.append("land.txt", {
//   filePath: "./land.txt",
// });

// use tar.getReader() to read the contents.

const writer = await Deno.open("./out.tar", { write: true, create: true });
await copy(tar.getReader(), writer);
writer.close();

// deno run --allow-all tar.ts