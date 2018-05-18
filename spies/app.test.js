const expect = require('expect')
const rewire = require('rewire')

const app = rewire('./app.js');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db);

  it('Should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Rico',47);
    expect(spy).toHaveBeenCalledWith('Rico',47);
  })

  it('Should call saveUser with user object', () => {
    var email = 'rico@club.fr';
    var pwd = 'abc123'

    app.handleSignup(email,pwd);

    expect(db.saveUser).toHaveBeenCalledWith({email:email, password:pwd})
  })
})
