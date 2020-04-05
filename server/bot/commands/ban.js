/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
/**
 @bot register user
 @info Ban a user
 @command ban
 */
BOT.onText(/\/ban (.+) "(.+)"/, (msg, match) => {

    const room = match[1]; 
    const id   = match[2];
    try {
        DB.ref.child('rooms/' + room + '/details').once("value", function(data) {
            if(!data.exists() || data.val().user_id != msg.from.id) {
                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou are not allowed to do that` , {
                    parse_mode:'HTML'
                });
            }
            else {
                DB.ref.child('rooms/' + room + '/users/permission/' + id).set({
                    permission: false,
                    date: msg.date || null
                })
                .then(()=>{
                    BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou have been banned user on identification ${id}` , {
                        parse_mode:'HTML'
                    });
                });
            }
        });
    }
    catch(err) { console.log(err) }
});
