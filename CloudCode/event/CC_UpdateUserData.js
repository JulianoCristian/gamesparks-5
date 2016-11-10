// ====================================================================================================
//
// Cloud Code for CC_UpdateUserData, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var logger = Spark.getLog();
logger.info("CC_UpdateUserData was called");
var uData = Spark.getData().userData;
logger.info(uData);

var player = Spark.getPlayer();
//logger.info(player);
// var customData = player.getScriptData('custom');
player.setScriptData('custom', uData);