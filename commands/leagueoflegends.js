const fetch = require('node-fetch');

module.exports = async function(msg, args) {
    let url = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.LOLKEY}`
    let response = await fetch(url);
    let json = await response.json();
    console.log(json)
    //const index = Math.floor(Math.random() * json.results.length);
    //msg.channel.send(json.results[index].url);
}