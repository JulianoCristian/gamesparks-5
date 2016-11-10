// ====================================================================================================
//
// Cloud Code for CC_CreateNewUser, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var dataVersion = 7;
var logger = Spark.getLog();

var player = Spark.getPlayer();
//logger.info(player);
var customData = player.getScriptData('custom');
var bCreateDefault = false;
if (customData) {
    logger.info("current version : " + customData.version);
    if (!customData.version || customData.version < dataVersion) {
        logger.info({currentData:customData});
        bCreateDefault = true;
    }
} else {
    bCreateDefault = true;
}

if (bCreateDefault) {
    logger.info("Create Default Profile");
    customData = {
        version: dataVersion,
        username: "",
        xp: 0,
        softCurrency: 100,
        hardCurrency: 0,
        hands: [
            {
                "generalID": "cd_0_001",
                "unitIDs": [
                "ud_0_03",
                "ud_1_01",
                "ud_1_02",
                "ud_1_03",
                "ud_1_04",
                "ud_1_06",
                "ud_1_13",
                "ud_3_01"
                ]
            },
            {
                "generalID": null,
                "unitIDs": null
            },
            {
                "generalID": null,
                "unitIDs": null
            }
        ],
         cardCollection: {
            "ud_0_01": { uniqueID: "ud_0_01", level: 1, owned: 1 },
            "ud_0_02": { uniqueID: "ud_0_02", level: 1, owned: 1 },
            "ud_0_03": { uniqueID: "ud_0_03", level: 1, owned: 1 },
            "ud_1_01": { uniqueID: "ud_1_01", level: 1, owned: 1 },
            "ud_1_02": { uniqueID: "ud_1_02", level: 1, owned: 1 },
            "ud_1_03": { uniqueID: "ud_1_03", level: 1, owned: 1 },
            "ud_1_04": { uniqueID: "ud_1_04", level: 1, owned: 1 },
        //    "ud_1_05": { uniqueID: "ud_1_05", level: 1, owned: 1 },
            "ud_1_06": { uniqueID: "ud_1_06", level: 1, owned: 1 },
        //    "ud_1_07": { uniqueID: "ud_1_07", level: 1, owned: 1 },
        //    "ud_1_08": { uniqueID: "ud_1_08", level: 1, owned: 1 },
            "ud_1_13": { uniqueID: "ud_1_13", level: 1, owned: 1 },
            "ud_3_01": { uniqueID: "ud_3_01", level: 1, owned: 1 },
        //    "ud_3_02": { uniqueID: "ud_3_02", level: 1, owned: 1 }
        }
    };
    player.setScriptData('custom', customData);
    logger.info("Created Default Profile");

}