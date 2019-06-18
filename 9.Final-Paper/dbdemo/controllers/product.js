const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
      .then(([rows]) => {
          console.log(JSON.stringify(rows));
          //res.send(JSON.stringify(rows));
          res.render('products', {
              data: rows,
              title: 'Product List',
          });
      })
      .catch(err => console.log(err));
};