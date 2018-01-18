const assert = require('assert');
const Location = require('../model/location.model');

describe('Creating records', () => {
    it('saves a location', (done) => {
      var avans = new Location({ 
        name: 'Avans Zonnepaneel locatie Hogeschoollaan'
         });
         

      avans.save()
        .then(() => {
          assert(!avans.isNew);
          done();
        });
    });
});