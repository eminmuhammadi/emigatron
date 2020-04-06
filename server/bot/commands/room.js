/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
const { v4: uuid } = require('uuid');
/**
 @bot emigatron
 @info Show all data for room
 @command room
 */
BOT.onText(/\/room (.+)/, (msg, match) => {

    const room = match[1]; 
    try {
        DB.ref.child('rooms/' + room + '/details').once("value", function(data) {
            if(!data.exists() || data.val().user_id != msg.from.id) {
                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou are not allowed to do that` , {
                    parse_mode:'HTML'
                });
            }
            else {
                const token = data.val().token;
                const user_id = data.val().user_id;
                BOT.sendMessage(msg.chat.id,`All details for room named as <b>#${room}</b>.
                \nCreated by: ${user_id}\nToken: <code>${token}</code>`,{
                  parse_mode:"HTML"
                });
            }
        });
    }
    catch(err) { console.log(err) }
});
