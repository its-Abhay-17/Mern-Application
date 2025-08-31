const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware'); // your JWT verification middleware

router.get('/user', authMiddleware, (req, res) => {
    res.status(200).json({
        message: 'User data fetched successfully',
        userData: req.user
    });
});

module.exports = router;