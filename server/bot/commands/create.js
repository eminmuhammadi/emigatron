/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
const { v4: uuid } = require('uuid');
/**
 @bot emigatron
 @info Create Room
 @command create
 */
BOT.onText(/\/create (.+)/, (msg, match) => {

    const room = match[1]; 
    try {
        DB.ref.child('rooms/' + room).once("value", function(data) {
            if(data.exists()){
                BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username}, room named as <b>#${room}</b> already exists`,{
                    parse_mode:"HTML"
                });
            }
            else{
                const token = uuid();
                DB.ref.child('rooms/' + room + '/details').set({
                    user_id: msg.from.id || null,
                    token:token || null,
                    date: msg.date || null
                })
                .then(()=>{
                  BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username}, you have created <b>#${room}</b> room `,{
                      parse_mode:"HTML"
                  });
                })
            }
        });
    }
    catch(err) { console.log(err) }
});
