const express = require('express');
const router = express.Router();
const search = require('../service/search.js');
const runGroupRepository = require('../repository/runGroupRepository.js');

router.get('/search', (req, res) => {
  const league = req.param('league');
  const groupName = req.param('name');

  if (!runGroupRepository.isExistsRunGroup(groupName)) {
    res.send({});
  } else {
    const inputItemNames = runGroupRepository.getRunGroupItemInfo(groupName, 0);
    const inputItem = inputItemNames.map(itemName => {
      var itemPrice = search.getMinimumPrice(league, itemName);
      return {name: itemName, ...itemPrice};
    });

    const outputItemNames = runGroupRepository.getRunGroupItemInfo(groupName, 1);
    const outputItem = outputItemNames.map(itemName => {
      var itemPrice = search.getMinimumPrice(league, itemName);
      return {name: itemName, ...itemPrice};
    });

    result = {groupName: groupName, inputItem: inputItem, outputItem: outputItem};
    res.send(result);
  }
});

module.exports = router;