const gif = require('./commands/gif');
const choochoo = require('./commands/choochoo');
const leagueoflegends = require('./commands/leagueoflegends');
const replies = require('./commands/replies');
const draven = require('./commands/draven');


const commands = { choochoo, gif, leagueoflegends, replies, draven };
const ids = require("./ids")

module.exports = async function (msg) {
    console.log(msg.content);
    console.log(msg.author.id);

    if (ids.CHANNEL_IDS.includes(msg.channel.id)) {

        if (msg.author.bot) {
            replies(msg, msg.author.id)
            return;
        }
                                             // msg.content = "!gif kitten"
        let tokens = msg.content.split(' '); // tokens = ["!gif", "kitten"]
        let command = tokens.shift();        // command = "!gif"
        if (command.charAt(0) === '!') {     // command.charAt(0) = "!"
            command = command.substring(1);  // command = "gif"
            if (!(command in commands)) {
                msg.reply(`${command} is not a valid command. Get with the program! Valid commands [${Object.keys(commands)}]`);
                return;
            }
            commands[command](msg, tokens);  // tokens = ["kitten"]
        }
        
        if (ids.USER_IDS.includes(msg.author.id)) {
            replies(msg, msg.author.id);
        }
    }
}