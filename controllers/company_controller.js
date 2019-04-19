const Company = require ('../models/company.js');

newCompany = {
  name: 'TestCompany5',
  status: 'prospect',
  notes: 'some notes'
};

module.exports = {
  index: function(req, res) {
    Company.all()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  }
};

// Company.new(newCompany)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// Company.all()
//   .then(data => {
//   console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Company.getById(0)
//   .then(data => {
//   console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Company.update({id: 0, name: 'TestCompany1'})
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Company.delete(7)
//   .then(data => {
//   console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
