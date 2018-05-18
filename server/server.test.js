const request = require('supertest')
const expect = require('expect')

var app = require('./server').app;

describe('Server', () => {
  describe('#Get /', () => {
    it('should retur hello', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    })
  })

  describe('#Get /about', () => {
    it('should return an array of object', (done) => {
      request(app)
        .get('/about')
        .expect(200)
        .expect((data) => {
          expect(data.body).toBeA('array').toInclude({
            name: 'Rico', 
            age: 47
          }).toInclude({name:'Mar', age:39})
        })
        .end(done)
    })
  })
})





