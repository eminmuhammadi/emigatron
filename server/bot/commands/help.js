/* eslint-disable no-console */
const path  = require('path');
const { BOT } = require(path.join(__dirname, '/../bot.js'));
/**
  @bot emigatron
  @info Get user information from firebase database
  @command help
*/
BOT.onText(/\/help/, function onMessage(msg) {
    BOT.sendMessage(msg.chat.id,
    `
    \nThe list of available commands:\n
    /help  - list of commands
    /start - start to use bot
    \n
    /token - update user's token
    /me    - show all data for user
    \n
    /join <code>room-name</code> <code>"token"</code>  - join to the room
    /say <code>room-name</code> <code>"message"</code> - push message to the room
    \n
    /create <code>room-name</code> - create room
    /update <code>room-name</code> - update token of room
    /ban <code>room-name</code> <code>"id"</code> - ban user on room
    \n
    `,{
      parse_mode:"HTML"
    });
});
