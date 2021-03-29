const router = require('express').Router();
const { Waitlist, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all users and JOIN with waitlist data
    const waitlistData = await Waitlist.findAll({
      include: [
        {
          model: User, 

        },
      ],
    });

    // Serialize data so the template can read it
    const waitlist = waitlistData.map((profile) => profile.get({ plain: true }));
    console.log(waitlist);

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      waitlist, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



// router will post/ create a new waitilst
router.post('/reservationandwaitlist', withAuth, async (req, res) => {
  try {
    const newWaitlist = await Waitlist.create({
      // by attaching user in fo through user id
      ...req.body,
      user_id: req.session.user_id,
    });
    //responf with json package 
    res.status(200).json(newWaitlist);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const waitlistData = await waitlist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!waitlistData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(waitlisttData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
