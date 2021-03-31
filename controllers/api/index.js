const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');

const waitlistRoutes = require ('./waitlistRoutes')

router.use('/waitlist', waitlistRoutes);
router.use('/users', userRoutes);
router.use('/profile', profileRoutes);

module.exports = router;