const express = require('express');
const router = express.Router();
const search = require('../service/search.js');

router.get('/', (req, res) => res.json({ username : 'Path of Exile' }));

router.get('/search', (req, res) => {
  const league = req.param('league');
  const groupName = req.param('name');
  
  if (groupName !== "ShaperRun") {
    res.send({});
  }
  
  const phoenix = search.getMinimumPrice(league, 'Fragment of the Phoenix');
  const hydra = search.getMinimumPrice(league, 'Fragment of the Hydra');
  const minotaur = search.getMinimumPrice(league, 'Fragment of the Minotaur');
  const chimera = search.getMinimumPrice(league, 'Fragment of the Chimera');

  const knowledge = search.getMinimumPrice(league, 'Fragment of Knowledge');
  const shape = search.getMinimumPrice(league, 'Fragment of Shape');

  let inputItem = [];
  inputItem.push({name: 'Fragment of the Phoenix', amount: phoenix.amout, currency: phoenix.currency});
  inputItem.push({name: 'Fragment of the Hydra', amount: hydra.amout, currency: hydra.currency});
  inputItem.push({name: 'Fragment of the Minotaur', amount: minotaur.amout, currency: minotaur.currency});
  inputItem.push({name: 'Fragment of the Chimera', amount: chimera.amout, currency: chimera.currency});

  let outputItem = [];
  outputItem.push({name: 'Fragment of Knowledge', amount: knowledge.amout, currency: knowledge.currency});
  outputItem.push({name: 'Fragment of Shape', amount: shape.amout, currency: shape.currency});

  result = {groupName: groupName, inputItem: inputItem, outputItem: outputItem};
  res.send(result);

});

module.exports = router;