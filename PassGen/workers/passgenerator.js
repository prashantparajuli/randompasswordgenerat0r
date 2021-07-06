alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
symbols = '`~!@#$%^&*()_-+={}|:;.,'
numbers = `0123456789`

const createPassword = (length = 8, hasSymbols = true, hasNumbers = true) => {
    let chars = alphabets;
    hasSymbols ? (chars += symbols) : ''
    hasNumbers ? (chars += numbers) : ''
    return passGenerator(length, chars);
}
const passGenerator = (length, chars) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
module.exports = createPassword