# Extract Package Dependencies

Extract Node.js package dependencies from a `package.json` file and generate
installation commands for later use.

## Requirements

* Node.js
* pnpm

## Installation

Clone the repository and install its dependencies:

```sh
git clone <repository-url>
cd <repository-directory>
pnpm install
```

## Usage

Place the `package.json` you want to process at:

```text
input/package.json
```

For example:

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

Run the extractor:

```sh
pnpm start
```

## Output

The generated installation commands are written to the `output` directory.

### `output/dependencies.txt`

```sh
pnpm i del gulp gulp-modifier gulp-rename
```

### `output/dev-dependencies.txt`

```sh
pnpm i -D @types/gulp @types/gulp-rename @types/vinyl nodemon prettier prettier-plugin-jsdoc prettier-plugin-pkg
```

The package versions are intentionally omitted from the generated commands.
The output can therefore be used to install the packages using the package
manager's current resolution rules.

## Directory Structure

```text
.
├── input/
│   └── package.json
├── output/
│   ├── dependencies.txt
│   └── dev-dependencies.txt
├── src/
├── package.json
└── README.md
```
