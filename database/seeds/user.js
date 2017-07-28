const models  = require('../../models');

models.User.create({ username: 'fnord', job: 'omnomnom' })
  .then(() => User.findOrCreate({where: {username: 'fnord'}, defaults: {job: 'something else'}}))
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
  })

