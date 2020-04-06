/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
/**
  @bot emigatron
  @info Welcome message
*/
BOT.onText(/\/start/, function onMessage(msg) {
  try {
    DB.ref.child('users/' + msg.from.id + '/details').set({
        id: msg.from.id,
        username: msg.from.username || null,
        is_bot: msg.from.is_bot || null,
        first_name: msg.from.first_name || null,
        last_name: msg.from.last_name || null,
        username: msg.from.username || null,
        language_code: msg.from.language_code || null,
        date:msg.date || null
    })
    .then(()=>{
      BOT.getMe().then((data)=>{
        BOT.sendMessage(msg.chat.id, `Howdy, I am @${data.username},\nHow could I help you?`,{
            parse_mode:"HTML"
        });
      });
  })}
  catch(err) { console.log(err) }
});
