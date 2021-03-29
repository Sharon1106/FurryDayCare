const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const waitlistRoutes = require('./waitlistRoutes');

router.use('/waitlist', waitlistRoutes);
router.use('/users', userRoutes);
router.use('/profile', projectRoutes);

module.exports = router;
