const ToursProduct = require('../models/tours');

exports.getRecent =  (req, res, next) => {
    ToursProduct.fetchRecent()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('recent', { 
            data: rows,
            title: 'Recent List' 
        });
    })
};

exports.getGallery =  (req, res, next) => {
    ToursProduct.fetchGallery()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('gallery', { 
            data: rows,
            title: 'Gallery List' 
        });
    })
};