const Portfolio = require('../models/portfolio');

exports.getPortfolio = (req, res, next) => {
    Portfolio.fetchAll()
      .then(([rows]) => {
          console.log(JSON.stringify(rows));
          //res.send(JSON.stringify(rows));
          res.render('portfolio', {
              data: rows,
              title: 'Portfolio List',
          });
      })
      .catch(err => console.log(err));
};