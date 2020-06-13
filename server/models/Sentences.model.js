const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const sentenceSchema = new Schema ({
    name: String,
    surname: String,
    title: String,
    description: String,
})

const Sentence = mongoose.model('Sentence', sentenceSchema);
module.exports = Sentence;
