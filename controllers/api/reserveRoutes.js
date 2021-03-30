const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Reserve, User } = require('../../models');

// The `/api/reserve` endpoint

router.get('/', async (req, res) => {
   try {
       const reserveData = await Reserve.findAll({
        include: [
          {
            model: User, 
          },
        ],
      });
      const reserve = reserveData.map((profile) => profile.get({ plain: true }));
      console.log(reserve);
      res.render('homepage', { 
        reserve, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});


router.post('/reservationandwaitlist', withAuth, async (req, res) => {
  // if we have room to book your pet, customer's info will be pushed to reserve
  try {
    const newReserve = await Reserve.create({
        ...req.body,
        user_id: req.session.user_id,

    })

    if (Reserve.length < 5) {
        Reserve.push(req.body);
        res.json(true);
      } else {
        waitListData.push(req.body);
        res.json(false);
      }
    
    res.status(200).json(newWaitlist);
}   catch (err) {
        res.status(400).json(err);
        }
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  Category.destroy ({
    where: {
      id: req.params.id
    }
  })
  .then (dbTagData => {
    if(!dbTagData) {
      res.status(404).json({ message: 'Tag id not found'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

module.exports = router;