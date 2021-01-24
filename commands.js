const gif = require('./commands/gif');
const choochoo = require('./commands/choochoo.js');
const leagueoflegends = require('./commands/leagueoflegends.js');


const commands = { choochoo, gif, leagueoflegends };

module.exports = async function (msg) {
    //console.log(msg); 
    if (msg.channel.id == '802890903311613973') {
        let tokens = msg.content.split(' ');
        let command = tokens.shift();
        if (command.charAt(0) === '!') {
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
}