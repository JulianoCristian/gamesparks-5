// ====================================================================================================
//
// Cloud Code for CC_UpdateDataTable, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var logger = Spark.getLog();

logger.info("starts UpdateDataTable");

var data = Spark.getData().data;
var tableName = Spark.getData().tableName;
var jsonData = JSON.parse(data);

// Spark.save(tableName, {a:'a'});
// logger.info("tableName is " + tableName);
// logger.info(jsonData);

var meta = Spark.metaCollection(tableName);

// Spark.runtimeCollection(collectionName).remove(query)
if (meta) {
    meta.remove({});
    for (var i = 0; i < jsonData.length; ++i) {
        var o = jsonData[i];
        if (o) {
            meta.save(o);
        }
    }
}