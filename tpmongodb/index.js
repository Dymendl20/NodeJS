const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const User = mongoose.model('User', {
    username: String,
    email: String,
    followers: String
});

mongoose.connect('mongodb://162.243.195.173:27017/db_test', err => {
    console.log(err);
    console.log("Connected");

    // User.create({
    //     username: "Bibi2",
    //     email: "biib@domain.tld",
    //     followers: "3000"
    // }).then(
    //     user => console.log(user)
    // ).catch(e => console.log(e));

    // User.find({}).then(
    //     users => console.log(users)
    // ).catch(e => console.log(e));

    // User.find({
    //     username: "Bibi"
    // }).then(
    //     users => console.log(users)
    // ).catch(e => console.log(e));

    User.findOne({
        username: "Bibi"
    }).then(
        user => console.log(user)
    ).catch(e => console.log(e));
});












