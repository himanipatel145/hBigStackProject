const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    profilepic: {
        type: String,
        default: "https://learncodeonline.in/maicon.png",
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Person = new mongoose.model('myPerson', PersonSchema);

module.exports = Person
//or
//module.exports = Person = mongoose.model('myPerson', PersonSchema);
//https://enviragallery.com/wp-content/uploads/2019/04/sell-photos-online-and-make-money.png