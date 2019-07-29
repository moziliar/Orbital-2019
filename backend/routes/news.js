const router = require('express').Router();
let News = require('../models/news.model');

router.route('/').get((req, res) => {
    News.find()
        .then(newss => res.json(newss))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    News.findById(req.params.id)
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    News.findByIdAndDelete(req.params.id)
        .then(() => res.json('News deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
    
router.route('/add').post((req, res) => {
    const newNews = new News(req.body);
    console.log(req.body);

    newNews.save()
        .then(() => {
            res.json('New News added!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    News.findById(req.params.id)
        .then(news => {
            news.newsTitle = req.params.newsTitle;
            news.newsText = req.params.newsText;

            news.save()
                .then(() => res.json('News updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})
    
module.exports = router;
