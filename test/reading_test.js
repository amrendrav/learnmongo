const assert = require('assert');

const User = require('../src/user');

describe('Reading users from database', () => {
    let amrendra;

    beforeEach((done) => {
        amrendra = new User({name : 'Amrendra'});
        amrendra
            .save()
            .then(() => done());

    });

    it('Finds all users having Amrendra as their name', (done) => {
        User.find({ name: 'Amrendra'})
        .then((users) => {
            assert(users[0]._id.toString() === amrendra._id.toString());
            done();
        });
    });
});