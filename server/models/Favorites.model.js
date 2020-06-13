const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    sentenceId: {
        type: Schema.Types.ObjectId,
        ref: "Sentence"
    },
    
},{
    timestamps: true
})


const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
