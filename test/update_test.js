const assert = require('assert');
const Location = require('../model/location.model');

describe('Updating records', () => {
  let avans;

  beforeEach((done) => {
    avans = new Location({ 
        name: 'Avans Zonnepaneel locatie Hogeschoollaan',
        street: 'Hogeschoollaan',
        houseNumber: 30,
        city: 'Breda',
        zipCode: '4854 TA',
        country: 'The Netherlands',
        Owner: 'Avans zonnepanelen',
        installationDate: 18-01-2018,
        installer: 'Tenten Solar',
        contactPerson: 'bart@tentensolar.com'
    });
    avans.save()
      .then(() => done());
  });

  function assertDescription(operation, done) {
    operation
    .then(() => Location.find({}))
    .then((locations) => {
      assert(locations.length === 1);
      assert(locations[0].name === 'Avans Zonnepaneel locatie Hogeschoollaan');
      done();
    });
  }

  it('instance type using set and save', (done) => {
    avans.set('name', 'Avans Zonnepaneel locatie Hogeschoollaan');
    assertDescription(avans.save(), done);

  });

  it('A model instance can update', (done) => {
    assertDescription(avans.update({ name: 'Avans Zonnepaneel locatie Hogeschoollaan'}), done);
  });

  it('A model class can update', (done) => {
    assertDescription(
      Location.update({ name: 'Avans Zonnepaneel locatie Hogeschoollaan' }, { name: 'Avans Test Hogeschoollaan' }),
      done()
    );
  });

  it('A model class can update one record', (done) => {
    assertDescription(
      Location.findOneAndUpdate({ name: 'Avans Zonnepaneel locatie Hogeschoollaan' }, { name: 'Avans Test Hogeschoollaan' }),
      done()
    );
  });

  it('A model class can find a record with an Id and update', (done) => {
    assertDescription(
        Location.findByIdAndUpdate(avans._id, { name: 'Avans Test Hogeschoollaan' }),
        done()
    );
  });
});
