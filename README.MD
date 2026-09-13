# extract-package-dependencies

Extract Node package dependencies as string, to be installed later.

- Clone this repository
- `pnpm install`
- Input: `input/package.json`

```json
{
  "dependencies": {
    "del": "^6.1.1",
    "gulp": "^5.0.1",
    "gulp-modifier": "^1.1.0",
    "gulp-rename": "^2.1.0"
  },
  "devDependencies": {
    "@types/gulp": "^4.0.18",
    "@types/gulp-rename": "^2.0.7",
    "@types/vinyl": "^2.0.12",
    "nodemon": "^3.1.14",
    "prettier": "^3.9.6",
    "prettier-plugin-jsdoc": "^1.8.1",
    "prettier-plugin-pkg": "^0.22.1"
  }
}
```

- `pnpm start`
- Output: `output/dependencies.txt`
- Output: `output/dev-dependencies.txt`

```sh
pnpm i del gulp gulp-modifier gulp-rename
```

```sh
pnpm i -D @types/gulp @types/gulp-rename @types/vinyl nodemon prettier prettier-plugin-jsdoc prettier-plugin-pkg
```
