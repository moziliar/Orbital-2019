const router = require('express').Router();
let Stall = require('../models/stall.model');

router.route('/').get((req, res) => {
    Stall.find()
        .then(stalls => res.json(stalls))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Stall.findById(req.params.id)
        .then(stall => res.json(stall))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Stall.findByIdAndDelete(req.params.id)
        .then(() => res.json('Stall deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
    
router.route('/add').post((req, res) => {
    const newStall = new Stall(req.body);
    console.log(req.body);

    newStall.save()
        .then(() => {
            res.json('New Stall added!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    Stall.findById(req.params.id)
        .then(stall => {
            stall.headerTitle = req.params.headerTitle;
            stall.img = req.params.img;
            stall.maps = req.params.maps;

            stall.save()
                .then(() => res.json('Stall updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})
    
module.exports = router;
