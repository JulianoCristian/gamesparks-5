// ====================================================================================================
//
// Cloud Code for CC_Evt, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var eventAttr1 = Spark.getData().CC_ATTR;
var eventAttr2 = Spark.getData().CC_ATTR2;
var eventAttr3 = Spark.getData().CC_ATTR3;
Spark.setScriptData("eventAttr1", eventAttr1.toUpperCase());
Spark.setScriptData("eventAttr2", eventAttr2 * 10);
eventAttr3.won = true;
Spark.setScriptData("eventAttr3", eventAttr3);