const express = require('express');
const BrideGroom = require('../models/bridegroom');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    console.log(`Getting data from : /bridegroom/${req.params.id}`);

    const bridegroom = await BrideGroom.findOne({
      bridegroom_id: req.params.id,
    });

    res.json(bridegroom);
  } catch (err) {
    throw err;
  }
});

router.get('/:id/wishes', async (req, res) => {
  try {
    console.log(`Getting wishes from : /bridegroom/${req.params.id}/wishes`);

    const { wishes } = await BrideGroom.findOne({
      bridegroom_id: req.params.id,
    });

    console.log(wishes);

    res.json(wishes);
  } catch (err) {
    throw err;
  }
});

router.post('/:id/wishes', async (req, res) => {
  try {
    console.log(`Posting wishes to : /bridegroom/${req.params.id}/wishes`);

    const bridegroom = await BrideGroom.findOne({
      bridegroom_id: req.params.id,
    });

    bridegroom.wishes = [
      ...bridegroom.wishes,
      {
        name: req.body.name,
        wish: req.body.wish,
      },
    ];

    await bridegroom.save();

    console.log(bridegroom.wishes);

    res.json(bridegroom.wishes);
  } catch (err) {
    throw err;
  }
});

router.delete('/:id/wishes/:wishId', async (req, res) => {
  try {
    console.log(
      `Deleting wishes from : /bridegroom/${req.params.id}/wishes/${req.params.wishId}`
    );

    const bridegroom = await BrideGroom.findOne({
      bridegroom_id: req.params.id,
    });

    const filteredWishes = bridegroom.wishes.filter(
      (wish) => wish._id.toString() !== req.params.wishId
    );

    bridegroom.wishes = filteredWishes;

    await bridegroom.save();

    console.log(filteredWishes);

    res.json(bridegroom.wishes);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
