const AgentsProduct = require('../models/agents');

exports.getAgents =  (req, res, next) => {
    AgentsProduct.fetchAgents()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('agents', { 
            data: rows,
            title: 'Agents List' 
        });
    })
};