import program from 'commander';
import { init } from '.';
import fs from 'fs-extra';
import path from 'path';
const pkg= fs.readJsonSync(path.join(process.cwd(), 'package.json'));

program
  .version(pkg.version)

program.command(`init`).description(`start init`).action(init);

program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  console.log(`${cmd} is not a command.`);
});

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
