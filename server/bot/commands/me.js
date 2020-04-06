/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
/**
  @bot emigatron
  @info Get user information from firebase database
  @command me
*/
BOT.onText(/\/me/, function onMessage(msg) {
  try {
    DB.ref.child('users/' + msg.from.id).once("value", function(data) {
        const first_name = data.val().details.first_name || null;
        const last_name  = data.val().details.last_name || null;
        const username   = data.val().details.username || null;
        const id = data.val().details.id || null;
        const token = data.val().token.token || null;

        BOT.sendMessage(msg.chat.id,`You are @${username}, and identified on ${id}.
        \nFirst Name: ${first_name}\nLast Name: ${last_name}\nToken: <code>${token}</code>`,{
          parse_mode:"HTML"
        });
    });
  }
  catch(err) { console.log(err) }
});
