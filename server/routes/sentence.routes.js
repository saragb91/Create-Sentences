const express = require('express')
const router = express.Router()

const Sentences = require('../models/Sentences.model')

router.get('/getAllSentences', (req, res, next) => {
    Sentences.find()
        .then(allSentences => res.json(allSentences))
        .catch(err=> next(err))
})

router.get('/getASentence/:id', (req,res,next) => {
    Sentences.findById(req.params.id)
        .then(theSentence => res.json(theSentence))
        .catch(err => next(err))
})

router.post('/new', (req, res, next) => {
    if(!req.body) res.sendStatus(400)

    Sentences.create(req.body)
        .then(newSentence => res.json(newSentence))
        .catch(err => next(err))
})




module.exports = router