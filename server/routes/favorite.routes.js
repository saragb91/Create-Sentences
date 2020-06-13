const express = require('express')
const router = express.Router()

const Favorites = require('../models/Favorites.model')

router.get('/getFavorites', (req, res, next) => {

    Favorites.find()
        .populate("sentenceId")
        .then(allFavorites => res.json(allFavorites))
        .catch(err=> next(err))
})

router.post('/newFavorite', (req, res, next) => {
    Favorites.create(req.body)
        .then(newFavorite => res.json(newFavorite))
        .catch(err => next(err))
})

module.exports = router