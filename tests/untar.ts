import { Untar } from "https://deno.land/std@0.106.0/archive/tar.ts";
import { ensureFile } from "https://deno.land/std@0.106.0/fs/ensure_file.ts";
import { ensureDir } from "https://deno.land/std@0.106.0/fs/ensure_dir.ts";
import { copy } from "https://deno.land/std@0.106.0/io/util.ts";

const reader = await Deno.open("./out.tar", { read: true });
const untar = new Untar(reader);

for await (const entry of untar) {
  console.log(entry); // metadata
  /*
    fileName: "archive/deno.txt",
    fileMode: 33204,
    mtime: 1591657305,
    uid: 0,
    gid: 0,
    size: 24400,
    type: 'file'
  */

  if (entry.type === "directory") {
    await ensureDir(entry.fileName);
    continue;
  }

  await ensureFile(entry.fileName);
  const file = await Deno.open(entry.fileName, { write: true });
  // <entry> is a reader.
  await copy(entry, file);
}
reader.close();
// deno run --allow-all --unstable untar.ts