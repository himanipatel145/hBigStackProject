const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ test: "Auth is success" })
})


module.exports = router;