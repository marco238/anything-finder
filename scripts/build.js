const { rollup } = require('rollup');
const chalk = require('chalk');

const startTime = new Date();

// Tell we're starting
console.log(chalk`${CLEAR_OUTPUT}{black.bgMagenta Starting build...}`);

const consoleBackup = global.console;
global.console = {
  log() { }, // do nothing
  warn() { }, // do nothing
  error: consoleBackup.error,
};

rollup(config)
  .then((bundle) => bundle.write(output))
  .then(() => {
    // Restore console binding
    global.console = consoleBackup;
    const time = (((new Date()) - startTime) / 1000).toFixed(2);
    console.log(chalk`${CLEAR_OUTPUT}\n{green.bold Yass! Done in ${time}s 🎉}\n{blue Tip: you can serve the build running} {black.bgBlue npm run serve:build}`);
  })
  .catch((error) => console.error(error));
