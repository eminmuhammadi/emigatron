/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
/**
 @bot emigatron
 @info Join to room
 @command join
 */
BOT.onText(/\/join (.+) "(.+)"/, (msg, match) => {

    const room  = match[1]; 
    const token = match[2];
    try {
        DB.ref.child('rooms/' + room + '/details').once("value", function(data) {
            if(!data.exists() || data.val().token != token) {
                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou are not allowed to do that` , {
                    parse_mode:'HTML'
                });
            }
            else {
                DB.ref.child('rooms/' + room + '/users/permission/' + msg.from.id).once("value", function(data) {
                    if(data.exists()){
                        BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYou have already joined to the <b>#${room}</b> room` , {
                            parse_mode:'HTML'
                        });    
                    }
                    else{
                        DB.ref.child('rooms/' + room + '/users/permission/'+ msg.from.id).set({
                            permission: true,
                            date: msg.date || null
                        })
                        .then(()=>{
                            DB.ref.child('rooms/' + room + '/users/list').push({
                                username: msg.from.username || null,
                                user_id: msg.from.id || null,
                                first_name : msg.from.first_name || null,
                                last_name: msg.from.last_name || null,
                                date: msg.date || null
                            })
                            .then(()=>{
                                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username}, you have joined to the <b>#${room}</b> room `,{
                                    parse_mode:"HTML"
                                });
                            });  
                        });
                    }
                });
            }
        });
    }
    catch(err) { console.log(err) }
});
