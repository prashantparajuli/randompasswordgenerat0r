const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePass = (password) => {
    fs.open(path.join(__dirname, '../', 'strongpass.txt'), 'a', (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.yellowBright('Saved successfully to strongpass.txt'));
            })
        })
    })
}
module.exports = savePass