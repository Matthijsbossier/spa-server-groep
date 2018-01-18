const assert = require('assert');
const Location = require('../model/location.model');

describe('Reading locations out of the database', () => {
  let avans, avans1;

  beforeEach((done) => {
    avans = new Location({ name: 'AvansTest' });
    avans1 = new Location({ name: 'Avans1Test' });

    Promise.all([avans.save(), avans1.save()])
      .then(() => done());
  });

  it('finds all locations with Avans', (done) => {
    Location.find({ name: 'AvansTest' })
      .then((locations) => {
        assert(locations[0]._id.toString() === avans._id.toString());
        done();
      });
  });

  it('find a location with a particular id', (done) => {
    Location.findOne({ _id: avans._id })
      .then((location) => {
        assert(location.name === 'AvansTest');
        done();
      });
  });

});