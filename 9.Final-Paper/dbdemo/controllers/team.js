const Team = require('../models/team');

exports.getTeam = (req, res, next) => {
  Team.fetchAll()
      .then(([rows]) => {
          console.log(JSON.stringify(rows));
          //res.send(JSON.stringify(rows));
          res.render('team', {
              data: rows,
              title: 'Team List',
          });
      })
      .catch(err => console.log(err));
};