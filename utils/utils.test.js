const utils = require('./utils');
const expect = require('expect')


describe('Utils', () => {

  describe('#add', () => {
    it('should add 2 numbers', () => {
      var res = utils.add(5,4);
    
      expect(res).toBe(9).toBeA('number');
    });

    it('should asyncAdd 2 num', (done) => {
      utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    })
  })

  describe('#square', () => {
    it('should return the square of a number', () => {
      var res = utils.square(5);
      expect(res).toBe(25).toBeA('number');
    });  
    
    it('should asyncSquare a value', (done) => {
      utils.asyncSquare(5, (res)=>{
        expect(res).toBe(25).toBeA('number');
        done();
      })
    })
  }) 

  describe('#Dummy', () => {
    it('should verify first and last name are set', () => {
      var user = {location: 'Paris', age: 47};
      var res = utils.setName(user,'Eric Hamimi');
    
      expect(res).toInclude({first:'Eric'}).toInclude({last:'Hamimi'})
    });
  })
  
})




// it('should expect dummy', () => {
//   expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   expect([2,3,4]).toInclude(3);
//   expect([2,3,4]).toExclude(5);

//   expect({
//     name:'Rico',
//     age: 47,
//     location: 'Paris'
//   }).toExclude({
//     age:40
//   })
// })

// testing asynchronous

