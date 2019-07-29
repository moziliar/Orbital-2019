const router = require('express').Router();
let Announcement = require('../models/announcement.model');

router.route('/').get((req, res) => {
    Announcement.find()
        .then(announcements => res.json(announcements))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Announcement.findById(req.params.id)
        .then(announcement => res.json(announcement))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Announcement.findByIdAndDelete(req.params.id)
        .then(() => res.json('Announcement deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
    
router.route('/add').post((req, res) => {
    const newAnnouncement = new Canteen(req.body);
    console.log(req.body);

    newAnnouncement.save()
        .then(() => {
            res.json('New Announcement added!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    Announcement.findById(req.params.id)
        .then(announcement => {
            announcement.headerTitle = req.params.headerTitle;
            announcement.headerSubTitle = req.params.headerSubTitle;
            announcement.headerText = req.params.headerText;
            announcement.title = req.params.title;
            announcement.description = req.params.description;
            announcement.img = req.params.img;
            announcement.maps = req.params.maps;

            announcement.save()
                .then(() => res.json('Announcement updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})
    
module.exports = router;
