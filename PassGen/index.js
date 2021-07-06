#!/usr/bin/env node

const generator = require('commander');
const chalk = require('chalk');
const clipboard = require('clipboardy');
const createPassword = require('./workers/passgenerator');
const savePass = require('./workers/savePass');

generator.version('1.0').description('Generates random password')

generator
    .option('-l, --length <num>', 'Length of password', '8')
    .option('-s, --save', 'Saves the password to a text file')
    .option('-ns, --no-sym', 'Removes symbols')
    .option('-nn, --no-num', 'Removes numbers from password')

.parse();

const { length, save, symbols, numbers } = generator.opts();

//generates password
const genPassword = createPassword(length, symbols, numbers);
if (save) {
    savePass(genPassword)
}
clipboard.writeSync(genPassword);
console.log(chalk.red('Genrated Password::') + chalk.green(chalk.bold(genPassword)));
console.log(chalk.blue('Password copied to clipboard'));