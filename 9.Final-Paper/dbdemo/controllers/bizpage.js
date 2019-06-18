const Portfolio = require('../models/portfolio');
const Team = require('../models/team');
exports.getBizPage = async (req, res, next) => {
            let portfolio;
            let team;
            try {
                const getPortfolio = await Portfolio.fetchAll()
                    .then(([rows]) => {
                        portfolio = rows;
                    })
                const getTeam = await Team.fetchAll()
                    .then(([rows]) => {
                        team = rows;
                    })
                // console.log(JSON.stringify(data));
                //res.send(JSON.stringify(data));
                res.render('index', {
                    title: 'BizPage',
                    portfolio: portfolio,
                    team: team,
                });
            } catch (err) {
                console.log(err);
            };
};