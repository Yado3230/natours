const express = require('express');
const app = require('../app');
const tourControllers = require('../controllers/tourController');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = tourControllers;

const router = express.Router();

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
// router.param('id', checkID);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
