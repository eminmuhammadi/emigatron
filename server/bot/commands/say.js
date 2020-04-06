/* eslint-disable no-console */
const path  = require('path');
const { DB , SECRET } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
const CryptoJS = require("crypto-js");
/**
 @bot emigatron
 @info Say message in room
 @command join
 */
BOT.onText(/\/say (.+) "(.+)"/, (msg, match) => {

    const room = match[1];
    const message = match[2];
    try {
        DB.ref.child('rooms/' + room + '/users/permission/'+ msg.from.id).once("value", function(data) {
            if(!data.exists()) {
                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou are not joined to <b>#${room}</b> room` , {
                    parse_mode:'HTML'
                });              
            }
            else {
                if(data.val().permission == false){
                    BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou are not allowed to do that` , {
                        parse_mode:'HTML'
                    });    
                }
                else {
                    DB.ref.child('users/' + msg.from.id + '/token').once("value", function(user_data) {
                        const enc_message = CryptoJS.AES.encrypt(message,user_data.val().token).toString();
                        DB.ref.child('rooms/' + room + '/messages').push({
                            user_id: msg.from.id || null,
                            username: msg.from.username || null,
                            message:enc_message || null,
                            date:msg.date || null
                        })
                        .then(()=>{
                            BOT.sendMessage(msg.chat.id, `<b>[${room}]</b> => @${msg.from.username} : ${message}` , {
                                parse_mode:'HTML'
                            });
                        });
                    });
                }
            }
        });
    }
    catch(err) { console.log(err) }
});
