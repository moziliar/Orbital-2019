const router = require('express').Router();
let Canteen = require('../models/canteen.model');

router.route('/').get((req, res) => {
    Canteen.find()
        .then(canteens => res.json(canteens))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Canteen.findById(req.params.id)
        .then(canteen => res.json(canteen))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Canteen.findByIdAndDelete(req.params.id)
        .then(() => res.json('Canteen deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
    
router.route('/add').post((req, res) => {
    const newCanteen = new Canteen(req.body);
    console.log(req.body);

    newCanteen.save()
        .then(() => {
            res.json('New Canteen added!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    Canteen.findById(req.params.id)
        .then(canteen => {
            canteen.headerTitle = req.params.headerTitle;
            canteen.headerSubTitle = req.params.headerSubTitle;
            canteen.headerText = req.params.headerText;
            canteen.title = req.params.title;
            canteen.description = req.params.description;
            canteen.img = req.params.img;
            canteen.maps = req.params.maps;

            canteen.save()
                .then(() => res.json('Canteen updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})
    
module.exports = router;
