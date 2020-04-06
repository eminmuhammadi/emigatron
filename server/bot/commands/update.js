/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
const { v4: uuid } = require('uuid');
/**
 @bot emigatron
 @info Update room token
 @command update
 */
BOT.onText(/\/update (.+)/, (msg, match) => {

    const room = match[1]; 
    try {
        DB.ref.child('rooms/' + room + '/details').once("value", function(data) {
            if(!data.exists() || data.val().user_id != msg.from.id) {
                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou are not allowed to do that` , {
                    parse_mode:'HTML'
                });
            }
            else {
                const token = uuid();
                DB.ref.child('rooms/' + room + '/details').set({
                    user_id: msg.from.id || null,
                    token:token || null,
                    date: msg.date || null
                })
                .then(()=>{
                    DB.ref.child('rooms/' + room + '/messages').remove();
                    DB.ref.child('rooms/' + room + '/users').remove();
                    BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nToken of ${room} has been updated to <code>${token}</code>` , {
                        parse_mode:'HTML'
                    });
                });
            }
        });
    }
    catch(err) { console.log(err) }
});
