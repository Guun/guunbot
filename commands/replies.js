const ids = require("../ids")

const GUBES_MSG_TO_REPLY = {
    "hi" : "hi",
    "bot game" : "fite me!",
    "organa" : "Morgana...but which skin!?",
    "nami" : "she smells fish",
    "hahaha" : "you two sure laugh a lot",
    "hehe" : "there's the giggles",
    "lunch" : "I could grab a byte",
    "muah" : "I can hear the evil laughs from here"
}

module.exports = function (msg, author) {

    if (author == ids.BOTS["JELLYBOT"]) {
        console.log("author was JELLYBOT") 

        if (msg.content.includes("axes")) { 
            msg.reply("AXES ARE AWESOME!");
        }
        else {
            const rand = Math.floor(Math.random() * 10);
            if (rand == 1) {
                msg.reply("...hey there hottiebot");
            }
        }
        return;
    }
    else if (author == ids.USERS["PHTEVENCAM"]) {
        console.log("author was PHTHEVENCAM") 

        if (msg.content.includes("test")) { 
            msg.reply("...if you actually read the docs you'd not have to try this a million times 🙄");
        }
    }
    else if (author == ids.USERS["GUBES"]) {
        console.log("author was GUBES")
        Object.keys(GUBES_MSG_TO_REPLY).forEach(key => {
            if (msg.content.includes(key)) {
                msg.reply(GUBES_MSG_TO_REPLY[key]);
            }
        });
    }
};