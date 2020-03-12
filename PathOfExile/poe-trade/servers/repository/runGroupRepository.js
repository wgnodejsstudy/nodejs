const mysql_dbc = require('../database/mysqlConnection.js')();
const connection = mysql_dbc.init();

function isExistsRunGroup(runGroupName) {
  const query_str = "SELECT COUNT(*) AS count FROM RUN_GROUP WHERE RUN_GROUP.run_group_name = ?";
  rows = connection.query(query_str, [runGroupName]);
  return rows[0].count > 0 ? true : false;
}

function getRunGroupItemInfo(runGroupName, itemType) {
  const query_str = 
    "SELECT RUN_ITEM.run_item_name " + 
    "FROM RUN_GROUP " + 
    "JOIN RUN_GROUP_ITEM ON RUN_GROUP.run_group_id = RUN_GROUP_ITEM.run_group_id " + 
    "JOIN RUN_ITEM ON RUN_GROUP_ITEM.run_item_id = RUN_ITEM.run_item_id " + 
    "WHERE RUN_GROUP.run_group_name = ? AND RUN_GROUP_ITEM.item_type = ? " +
    "ORDER BY RUN_GROUP_ITEM.item_order";

  rows = connection.query(query_str, [runGroupName, itemType]);
  return rows.map(r => r.run_item_name);
}

module.exports.getRunGroupItemInfo = getRunGroupItemInfo;
module.exports.isExistsRunGroup = isExistsRunGroup;