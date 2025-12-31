import { glob as tg } from "tinyglobby";
import fg from "fast-glob";

const glob = "**/.foo/*.ts";

const tinyglobbyResult = await tg(glob, {
  expandDirectories: false,
  cwd: "src",
});
console.log({ tinyglobbyResult });

const fastGlobResult = await fg.glob(glob, { cwd: "src" });
console.log({ fastGlobResult });

const tinyglobbyResultRootCwd = await tg(glob, {
  expandDirectories: false,
  cwd: process.cwd(),
});
console.log({ tinyglobbyResultRootCwd });

const fastGlobResultRootCwd = await fg.glob(glob, { cwd: process.cwd() });
console.log({ fastGlobResultRootCwd });

const tinyglobbyResultDotTrue = await tg(glob, {
  expandDirectories: false,
  dot: true,
  cwd: "src",
});
console.log({ tinyglobbyResultDotTrue });

const fastGlobResultDotTrue = await fg.glob(glob, { cwd: "src", dot: true });
console.log({ fastGlobResultDotTrue });
