const router = require('express').Router();
const { Reserve, User } = require('../../models');

// The `/api/reserve` endpoint

router.get('/', (req, res) => {
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
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        reserve, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Reserve.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'customerName', 'customerEmail', 'petName', 'phoneNumber'],
    include: [
        {
          model: User
        }
    ]

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

router.post('/', (req, res) => {
  // if we have room to book your pet, customers info will be pushed to reserve
  if (Reservations.length < 5) {
    Reservations.push(req.body);
    res.json(true);
  } else {
    waitListData.push(req.body);
    res.json(false);
  }
});


router.delete('/:id', (req, res) => {
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