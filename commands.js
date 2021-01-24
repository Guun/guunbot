const gif = require('./commands/gif');
const choochoo = require('./commands/choochoo');
const leagueoflegends = require('./commands/leagueoflegends');
const replies = require('./commands/leagueoflegends');

const commands = { choochoo, gif, leagueoflegends, replies };

module.exports = async function (msg) {
    //console.log(msg); 
    if (msg.channel.id == '802890903311613973') {

        if (msg.author == '802876182017343569') {
            msg.reply("...hey there hottiebot");
            return;
        }
        if (msg.author.bot) {
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
    }
}