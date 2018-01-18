// const assert = require('assert');
// const Location = require('../model/location.model');

// describe('Deleting a location', () => {
//   let avans;

//   beforeEach((done) => {
//     avans = new Location({ 
//         name: 'Avans Zonnepaneel locatie Hogeschoollaan',
//         street: 'Hogeschoollaan',
//         houseNumber: 30,
//         city: 'Breda',
//         zipCode: '4854 TA',
//         country: 'The Netherlands',
//         Owner: 'Avans zonnepanelen',
//         installationDate: 18-01-2018,
//         installer: 'Tenten Solar',
//         contactPerson: 'bart@tentensolar.com'
//      })
//      done();
//     avans.save()
//       .then(() => done());
//   });
  

//   it('model instance remove', (done) => {
//     avans.remove()
//       .then(() => Location.findOne({ name: 'Avans Zonnepaneel locatie Hogeschoollaan'}))
//       .then((location) => {
//         assert(location === null);
//         done();
//       });
//   });

//   it('class method remove', (done) => {
//     Location.remove({ name: 'Avans Zonnepaneel locatie Hogeschoollaan'})
//       .then(() => Location.findOne({ name: 'Avans Zonnepaneel locatie Hogeschoollaan'}))
//       .then((location) => {
//         assert(location === null);
//         done();
//       });
//   });

//   it('class method findAndRemove', (done) => {
//     Location.findOneAndRemove({ name: 'Avans Zonnepaneel locatie Hogeschoollaan' })
//       .then(() => Location.findOne({ name: 'Avans Zonnepaneel locatie Hogeschoollaan'}))
//       .then((location) => {
//         assert(location === null);
//         done();
//     });
//   })

//   it('class method findByIdAndRemove', (done) => {
//     Location.findByIdAndRemove(avans._id)
//       .then(() => Location.findOne({ name: 'Avans Zonnepaneel locatie Hogeschoollaan'}))
//       .then((location) => {
//         assert(location === null);
//         done();
//     });
//   });
// })