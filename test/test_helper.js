const mongoose = require('mongoose');

//Overridded default Promise Implementation with Global
mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://localhost/user_test');

before((done) => {
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
    console.warn('Warning', error);
});
})



beforeEach((done) => {

    mongoose.connection.collections.users.drop(() => {
        //Ready to run next test
        done();
    });
})