const fetch = require('node-fetch');
const champions = require('../league-json/champion');
const champ_id_name = require('../league-json/champ_id_name');


module.exports = async function(msg, args) {
    /*Object.keys(champions.CHAMPIONS).forEach(key => {
        //console.log(key);
        console.log(champions.CHAMPIONS[key]["key"]);

    });
    //console.log("leagueoflegends not implemented");
    */
    let summoner_name = 'guunzor';
    
    if (args.length > 0) {
        summoner_name = args.join(" ");
    }
    let url =`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${process.env.LOLKEY}`;
    //let url = `https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.LOLKEY}`
    let response = await fetch(url);
    let json = await response.json();
    //console.log(json);
    account_id = json["accountId"];
    //console.log(account_id);

    url = `https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${account_id}?endIndex=1&beginIndex=0&api_key=${process.env.LOLKEY}`;
    response = await fetch(url);
    json = await response.json();
    console.log(json);
    match_id = json["matches"][0]["gameId"];
    champion_id = json["matches"][0]["champion"];
    //console.log(match_id);
    console.log("champion_id");
    console.log(champion_id);
    var champion_name = champ_id_name.CHAMP_ID_NAME[parseInt(champion_id)];
    console.log(champion_name);

    url = `https://euw1.api.riotgames.com/lol/match/v4/matches/${match_id}?api_key=${process.env.LOLKEY}`;
    response = await fetch(url);
    json = await response.json();
    console.log(json);
    let participants = json["participants"];

    /*let participants = [
        {
            "participantId": 1,
            "teamId": 100,
            "championId": 157,
            "spell1Id": 4,
            "spell2Id": 12,
            "stats": {
                "participantId": 1,
                "win": true,
                "item0": 6672,
                "item1": 1018,
                "item2": 1042,
                "item3": 1055,
                "item4": 3006,
                "item5": 2055,
                "item6": 3340,
                "kills": 2,
                "deaths": 2,
                "assists": 5,
                "largestKillingSpree": 2,
                "largestMultiKill": 2,
                "killingSprees": 1,
                "longestTimeSpentLiving": 665,
                "doubleKills": 1,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 103786,
                "magicDamageDealt": 8752,
                "physicalDamageDealt": 92297,
                "trueDamageDealt": 2736,
                "largestCriticalStrike": 377,
                "totalDamageDealtToChampions": 12693,
                "magicDamageDealtToChampions": 1150,
                "physicalDamageDealtToChampions": 11272,
                "trueDamageDealtToChampions": 269,
                "totalHeal": 3302,
                "totalUnitsHealed": 1,
                "damageSelfMitigated": 10307,
                "damageDealtToObjectives": 8426,
                "damageDealtToTurrets": 3448,
                "visionScore": 18,
                "timeCCingOthers": 25,
                "totalDamageTaken": 12529,
                "magicalDamageTaken": 4764,
                "physicalDamageTaken": 7103,
                "trueDamageTaken": 661,
                "goldEarned": 8504,
                "goldSpent": 9700,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 151,
                "neutralMinionsKilled": 4,
                "neutralMinionsKilledTeamJungle": 0,
                "neutralMinionsKilledEnemyJungle": 1,
                "totalTimeCrowdControlDealt": 95,
                "champLevel": 13,
                "visionWardsBoughtInGame": 4,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 10,
                "wardsKilled": 3,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8010,
                "perk0Var1": 209,
                "perk0Var2": 0,
                "perk0Var3": 0,
                "perk1": 9111,
                "perk1Var1": 407,
                "perk1Var2": 140,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 21,
                "perk2Var2": 50,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 99,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8139,
                "perk4Var1": 735,
                "perk4Var2": 0,
                "perk4Var3": 0,
                "perk5": 8135,
                "perk5Var1": 775,
                "perk5Var2": 5,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8100,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5003
            },
            "timeline": {
                "participantId": 1,
                "creepsPerMinDeltas": {
                    "10-20": 8.8,
                    "0-10": 6.2
                },
                "xpPerMinDeltas": {
                    "10-20": 560.9000000000001,
                    "0-10": 419.20000000000005
                },
                "goldPerMinDeltas": {
                    "10-20": 418,
                    "0-10": 231
                },
                "csDiffPerMinDeltas": {
                    "10-20": 1.0999999999999996,
                    "0-10": 1.8
                },
                "xpDiffPerMinDeltas": {
                    "10-20": 4.400000000000034,
                    "0-10": -8.19999999999996
                },
                "damageTakenPerMinDeltas": {
                    "10-20": 749.9,
                    "0-10": 360.1
                },
                "damageTakenDiffPerMinDeltas": {
                    "10-20": -419.1,
                    "0-10": -90.9
                },
                "role": "SOLO",
                "lane": "TOP"
            }
        },
        {
            "participantId": 2,
            "teamId": 100,
            "championId": 96,
            "spell1Id": 7,
            "spell2Id": 4,
            "stats": {
                "participantId": 2,
                "win": true,
                "item0": 1054,
                "item1": 3124,
                "item2": 3153,
                "item3": 1001,
                "item4": 1018,
                "item5": 6670,
                "item6": 3340,
                "kills": 7,
                "deaths": 5,
                "assists": 5,
                "largestKillingSpree": 2,
                "largestMultiKill": 2,
                "killingSprees": 2,
                "longestTimeSpentLiving": 367,
                "doubleKills": 2,
                "tripleKills": 0,
                "quadraKills": 0,
                "pentaKills": 0,
                "unrealKills": 0,
                "totalDamageDealt": 88203,
                "magicDamageDealt": 20163,
                "physicalDamageDealt": 58196,
                "trueDamageDealt": 9843,
                "largestCriticalStrike": 133,
                "totalDamageDealtToChampions": 14613,
                "magicDamageDealtToChampions": 7232,
                "physicalDamageDealtToChampions": 5767,
                "trueDamageDealtToChampions": 1613,
                "totalHeal": 428,
                "totalUnitsHealed": 2,
                "damageSelfMitigated": 4400,
                "damageDealtToObjectives": 20251,
                "damageDealtToTurrets": 2592,
                "visionScore": 4,
                "timeCCingOthers": 5,
                "totalDamageTaken": 11015,
                "magicalDamageTaken": 4525,
                "physicalDamageTaken": 6174,
                "trueDamageTaken": 315,
                "goldEarned": 9411,
                "goldSpent": 8400,
                "turretKills": 1,
                "inhibitorKills": 0,
                "totalMinionsKilled": 117,
                "neutralMinionsKilled": 12,
                "neutralMinionsKilledTeamJungle": 1,
                "neutralMinionsKilledEnemyJungle": 0,
                "totalTimeCrowdControlDealt": 193,
                "champLevel": 12,
                "visionWardsBoughtInGame": 0,
                "sightWardsBoughtInGame": 0,
                "wardsPlaced": 3,
                "wardsKilled": 1,
                "firstBloodKill": false,
                "firstBloodAssist": false,
                "firstTowerKill": false,
                "firstTowerAssist": false,
                "combatPlayerScore": 0,
                "objectivePlayerScore": 0,
                "totalPlayerScore": 0,
                "totalScoreRank": 0,
                "playerScore0": 0,
                "playerScore1": 0,
                "playerScore2": 0,
                "playerScore3": 0,
                "playerScore4": 0,
                "playerScore5": 0,
                "playerScore6": 0,
                "playerScore7": 0,
                "playerScore8": 0,
                "playerScore9": 0,
                "perk0": 8008,
                "perk0Var1": 1,
                "perk0Var2": 50,
                "perk0Var3": 0,
                "perk1": 8009,
                "perk1Var1": 1477,
                "perk1Var2": 0,
                "perk1Var3": 0,
                "perk2": 9104,
                "perk2Var1": 15,
                "perk2Var2": 20,
                "perk2Var3": 0,
                "perk3": 8014,
                "perk3Var1": 412,
                "perk3Var2": 0,
                "perk3Var3": 0,
                "perk4": 8226,
                "perk4Var1": 250,
                "perk4Var2": 227,
                "perk4Var3": 0,
                "perk5": 8237,
                "perk5Var1": 296,
                "perk5Var2": 0,
                "perk5Var3": 0,
                "perkPrimaryStyle": 8000,
                "perkSubStyle": 8200,
                "statPerk0": 5005,
                "statPerk1": 5008,
                "statPerk2": 5002
            },
            "timeline": {
                "participantId": 2,
                "creepsPerMinDeltas": {
                    "10-20": 4.5,
                    "0-10": 6.1
                },
                "xpPerMinDeltas": {
                    "10-20": 401,
                    "0-10": 303
                },
                "goldPerMinDeltas": {
                    "10-20": 509.6,
                    "0-10": 254.2
                },
                "csDiffPerMinDeltas": {
                    "10-20": 0.20000000000000018,
                    "0-10": -0.5
                },
                "xpDiffPerMinDeltas": {
                    "10-20": 32.95000000000002,
                    "0-10": 17.700000000000017
                },
                "damageTakenPerMinDeltas": {
                    "10-20": 648.5,
                    "0-10": 374.4
                },
                "damageTakenDiffPerMinDeltas": {
                    "10-20": -202.49999999999997,
                    "0-10": -49.19999999999999
                },
                "role": "DUO_CARRY",
                "lane": "BOTTOM"
            }
        }
    ]*/
    //let champion_id = 96;
    let participant_id = -1;
    for (i in participants) {
        //console.log(i["championId"]);
        temp_champ_id = participants[i]["championId"];
        console.log(temp_champ_id);
        if (temp_champ_id == champion_id) {
            console.log(`${summoner_name} was participant ${i}`)
            participant_id = i;
        }
    }
    
    stats = participants[participant_id]["stats"]
    
    //const index = Math.floor(Math.random() * json.results.length);
    //msg.channel.send(json.results[index].url);

    msg.channel.send(`${summoner_name} played ${champion_name} last game. Kills ${stats["kills"]},  Deaths: ${stats["deaths"]}, Assists: ${stats["assists"]}`);
}