const bot_replies = [
    '🚄🌈💖',
    'Choo choo!',
    'Ding! 🔔',
    'Never forget this dot!'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * bot_replies.length);
    msg.channel.send(bot_replies[index]);
};