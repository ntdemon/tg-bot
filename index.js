/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const TelegramBot = require('node-telegram-bot-api');
const TOKEN ="1024128874:AAHcWgV4M3ICN_5GfbXPSYUoGtr6GHjvrMY";
const bot = new TelegramBot(TOKEN,{polling:true});
bot.on("message", (msg)=>{
    bot.sendMessage(msg.chat.id,'Сообщение получено111');
});
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
