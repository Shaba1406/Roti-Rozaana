const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const UsersController = require('../Controllers/Users');
const FoodFormController = require('../Controllers/FoodForm');
const feedbackController = require('../Controllers/Feedbacks');

router.get('/',FoodFormController.indexFile);
router.get('/getUsers',UsersController.getUsers);
router.post('/signup',UsersController.Signup);
router.post('/login',UsersController.Login);
 
router.post('/addfooddata', upload.single('image') ,FoodFormController.addFoodForm);
router.get('/getfooddata',FoodFormController.getFoodData);

router.post('/feedback',feedbackController.createFeedback);

module.exports = router;