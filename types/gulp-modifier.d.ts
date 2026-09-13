declare module 'gulp-modifier' {
  import type { Transform } from 'node:stream';
  import type File from 'vinyl';
  // import File = require("vinyl")

  type Modifier = (
    content: string,
    path: string,
    file: File,
  ) => string | Promise<string>;

  function modifyContent(modifier?: Modifier): Transform;

  export = modifyContent;
}

// ------------------------

// types\gulp-modifier\index.d.ts
// Can be used by setting compilerOptions.paths

// ```ts
// import type { Transform } from 'node:stream';
// import type { File } from 'vinyl';

// type ModifierFunction = (
//   content: string,
//   path: string,
//   file: File,
// ) => string | Buffer | Promise<string | Buffer>;

// declare function modifyContent(modifierFn?: ModifierFunction): Transform;

// export = modifyContent;
// ```
