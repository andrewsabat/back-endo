let TelegramBot = require('node-telegram-bot-api');
let token = '1137788145:AAE0Y5cjlsqEj86m1cPDsdMhADmjLR_I8CM';
let bot = new TelegramBot(token, { polling: true });

let answers = new Map();
answers.set('\/start', 'Привіт чоловіче! До якої раси ти відносишся?')
    .set('Слава Україні!', 'Героям слава!')
    .set('Героям слава!', 'Смерть ворогам!')
    .set('Українець', 'Ого, то ти, мабуть, знаєш кодову фразу?')
    .set('Ні', 'Ну тоді не кисни! Щасти!');

bot.onText(/(.+)/, (msg, match) => {
    let fromId = msg.from.id;
    let resp = match[1];
    if (answers.get(resp) === undefined) {
        bot.sendMessage(fromId, "Хлопче, пояснюйся зрозуміліше!");
    }
    else {
    bot.sendMessage(fromId, answers.get(resp));
    }
});