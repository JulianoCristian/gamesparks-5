// ====================================================================================================
//
// Cloud Code for AuthenticationResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var logger = Spark.getLog();
var specialLog = Spark.runtimeCollection("SpecialLog");
specialLog.insert({msg:"Auth Response"});
logger.info({msg:"Auth Response"});