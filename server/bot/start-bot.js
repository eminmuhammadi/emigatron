/***
  For Documentation
  https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md
*/
/* eslint-disable no-console */
process.env.NTBA_FIX_319 = 1;
process.env.NTBA_FIX_350 = 1;
const path = require('path');
/***
  Commands to activate
*/
require(path.join(__dirname, '/commands/start.js'));
require(path.join(__dirname, '/commands/me.js'));
require(path.join(__dirname, '/commands/token.js'));
require(path.join(__dirname, '/commands/say.js'));
require(path.join(__dirname, '/commands/join.js'));
require(path.join(__dirname, '/commands/create.js'));
require(path.join(__dirname, '/commands/update.js'));
require(path.join(__dirname, '/commands/ban.js'));
require(path.join(__dirname, '/commands/help.js'));
require(path.join(__dirname, '/commands/room.js'));

console.log(`\x1b[40m`,`\x1b[32m`,
`         
         _______  __   __  ___   _______  _______ 
        |       ||  |_|  ||   | |       ||   _   |
        |    ___||       ||   | |    ___||  |_|  |
        |   |___ |       ||   | |   | __ |       |
        |    ___||       ||   | |   ||  ||       |
        |   |___ | ||_|| ||   | |   |_| ||   _   |
        |_______||_|   |_||___| |_______||__| |__|
    
        [~] Bot has been started...
        [~] Powered by https://github.com/yagop/node-telegram-bot-api
`,`\x1b[0m`)