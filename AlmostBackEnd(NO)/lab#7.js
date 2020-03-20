let TelegramBot = require('node-telegram-bot-api');
let childProcess = require('child_process');

let token = '1137788145:AAE0Y5cjlsqEj86m1cPDsdMhADmjLR_I8CM';
let bot = new TelegramBot(token, {polling: true});

let answers = new Map();
answers.set('\/start', 'Привіт чоловіче!')
    .set('слава україні!', 'Героям слава!')
    .set('героям слава!', 'Смерть ворогам!')
    .set('привіт', 'Здоров будь!')
    .set('бувай', 'Щасти!');

bot.onText(/(.+)/, (msg, match) => {
    let fromId = msg.from.id;
    let resp = match[1].toLowerCase();
    if (resp === '\/ipconfig') {
        childProcess.exec('ipconfig \/all', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            bot.sendMessage(fromId, stdout);
        });
    } else if (resp.split(" ")[0] === '\/ping') {
        childProcess.exec(resp.slice(1, resp.length), (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
            }
            bot.sendMessage(fromId, stdout);
        });
    } else if (answers.get(resp) === undefined) {
        bot.sendMessage(fromId, "Вибачай, але я тебе не розумію.");
    } else {
        bot.sendMessage(fromId, answers.get(resp));
    }
});