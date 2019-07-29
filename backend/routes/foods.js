const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
    Food.find()
        .then(foods => res.json(foods))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Food.findById(req.params.id)
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
    
router.route('/add').post((req, res) => {
    const newFood = new Food(req.body);
    console.log(req.body);

    newFood.save()
        .then(() => {
            res.json('New Food added!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    Food.findById(req.params.id)
        .then(food => {
            food.headerTitle = req.params.headerTitle;
            food.price = req.params.price;
            food.headerSubTitle = req.params.headerSubTitle;
            food.headerText = req.params.headerText;
            food.title = req.params.title;
            food.description = req.params.description;
            food.img = req.params.img;
            food.maps = req.params.maps;

            food.save()
                .then(() => res.json('Food updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})
    
module.exports = router;
