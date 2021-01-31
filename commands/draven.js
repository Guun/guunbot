const Discord = require('discord.js');

module.exports = function (msg, args) {
    //const attachment = new Discord.MessageAttachment('./img/Draven_ruined.jpeg', './img/draven.gif')
    const attachment = new Discord.MessageAttachment('./img/draven.gif', 'draven.gif')
    const exampleEmbed = new Discord.MessageEmbed()
        //.setColor('#0099ff')
        .setColor('#ffffff')
        .setTitle('Draven')
        .attachFiles(attachment)
        //.setURL('https://discord.js.org/')
        //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('The glorious executioner')
        //.setThumbnail('attachment://Draven_ruined.jpeg')
        .setThumbnail('https://i.imgur.com/szF2XdP.jpg')
        //.addFields(
        //    { name: 'Regular field title', value: 'Some value here' },
        //    { name: '\u200B', value: '\u200B' },
        //    { name: 'Inline field title', value: 'Some value here', inline: true },
        //    { name: 'Inline field title', value: 'Some value here', inline: true },
        //)
        //.addField('Inline field title', 'Some value here', true)
        .setImage('attachment://draven.gif')
        //.setTimestamp()
        //.setFooter('Some footer text here', '');

    msg.channel.send(exampleEmbed);
}