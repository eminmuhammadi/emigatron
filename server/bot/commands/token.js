/* eslint-disable no-console */
const path  = require('path');
const { DB } = require(path.join(__dirname, '/../../config.js'));
const { BOT } = require(path.join(__dirname, '/../bot.js'));
const { v4: uuid } = require('uuid');
/**
 @bot emigatron
 @info Genereate token for id
 @command token
 */
BOT.onText(/\/token/, function onMessage(msg) {
    try {
        const token = uuid();
        DB.ref.child('users/' + msg.from.id + '/token').set({
            id: msg.from.id || null,
            token:token || null,
            date:msg.date || null
        })
        .then(()=>{
            BOT.sendMessage(msg.chat.id, `Dear @${msg.from.username},\nYour token has been updated to <code>${token}</code>` , {
                parse_mode:'HTML'
            });
        })
    }
    catch(err) { console.log(err) }
});
