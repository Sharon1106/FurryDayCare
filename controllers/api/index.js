const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const reserveRoutes = require('./reserveRoutes');
const waitlistRoutes = require ('./waitlistRoutes')

router.use('/waitlist', waitlistRoutes);
router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/reserve', reserveRoutes);
// router.use('./reservations', reservationWaitlistRoutes);


module.exports = router;
