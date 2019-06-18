const ToursProduct = require('../models/tours');
const AgentsProduct = require('../models/agents');

exports.getCombined = async (req, res, next) => {

    let travel;
    let recent;
    let galley;
  
  
    try {
      const get = await AgentsProduct.fetchAgents()
        .then(([rows]) => {
            travel = rows;
        })
  
      const getTeam = await ToursProduct.fetchRecent()
        .then(([rows]) => {
          recent = rows;
        })
      
      const getteamm = await ToursProduct.fetchGallery()
        .then(([rows]) => {
          galley = rows;
        })
  
      // console.log(JSON.stringify(data));
      //res.send(JSON.stringify(data));
  
      res.render('combined', {
        ttitle: 'Agents List',
        tdata: travel,
        rtitle: 'Recent List',
        rdata: recent,
        gtitle: 'Gallery List',
        gdata: galley
      });
  
    } catch (err) {
      console.log(err);
    };
  
  };