module.exports.add = (a,b) => {
  return a+b;
}

module.exports.asyncAdd = (a, b, cb) => {
  setTimeout(()=>{
    cb(a+b);
  }, 1000)
}

module.exports.asyncSquare = (x, cb) => {
  setTimeout(() => {
    cb(x*x);
  }, 1000)
}

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.first = names[0];
  user.last = names[1];

  return user;
}