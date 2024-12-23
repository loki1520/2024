// https://github.com/oblador/loki/issues/76#issuecomment-595777550
const { promisify } = require('util');
// import { promisify } from 'util';
const { readdir, writeFile } = require('fs');
// import { readdir, writeFile } from 'fs';
const { join: joinPath, relative } = require('path');
// import { join as joinPath, relative } from 'path';

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lokiDir = joinPath(__dirname, '..', '.loki');
const actualDir = joinPath(lokiDir, 'current');
const expectedDir = joinPath(lokiDir, 'reference');
const diffDir = joinPath(lokiDir, 'difference');

(async function main() {
    const diffs = await asyncReaddir(diffDir);

    await writeFileAsync(
        joinPath(lokiDir, 'report.json'),
        JSON.stringify({
            newItems: [],
            deletedItems: [],
            passedItems: [],
            failedItems: diffs,
            expectedItems: diffs,
            actualItems: diffs,
            diffItems: diffs,
            actualDir: relative(lokiDir, actualDir),
            expectedDir: relative(lokiDir, expectedDir),
            diffDir: relative(lokiDir, diffDir),
        }),
    );
})();
