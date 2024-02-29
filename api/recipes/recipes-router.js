const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'ERROR in recipes router',
        message: error.message,
        stack: err.stack,
    })
})

module.exports = router