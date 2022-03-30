const router = require('express').Router();
const { json } = require('express');
// const withAuth = require('../../client/src/utils/auth');
const { User, Listing } = require('../models');
const cors = require('cors');

router.use(cors());

router.get('/', async (req, res) => {
    try {
      const listingData = await Listing.findAll()
      console.log('LISTINGDATA',listingData);
      const listings = listingData.map((listing) => listing.get({ plain: true }));

      res.json(listings);
    }
     catch (err) {
       res.status(500).json(err);
     }
  });

  // router.post('/newUser', async (req, res) => {
  //   try {
  //     const userData = await User.create(req.body);
  //     console.log(req.body)
  //     // 200 status code means the request is successful
  //     res.status(200).json(userData);
  //   } catch(err){
  //     res.status(400).json(err);
  //   }
  // })

  module.exports = router;