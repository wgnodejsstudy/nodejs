const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.json({username:'Path of Exile'}));

module.exports = router;