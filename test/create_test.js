const assert = require('assert');
const User = require('../src/user');

describe('Creating a new User Record', () => {
    it(' -> Saving a User', (done) =>  {
        const amrendra = new User({name: 'Amrendra'});

        amrendra.save()
            .then(() => {
                //Is Amrendra persisted successfully
                assert(!amrendra.isNew);
                done();
        });
    })
});