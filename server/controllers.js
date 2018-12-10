const elasticsearch = require('elasticsearch');

const bonsaiUrl = 'https://HZWEuRamTP:9cSCUsv24HGfgYPKW@training-plans-sandb-435310341.us-east-1.bonsaisearch.net/';
const client = new elasticsearch.Client({
  host: bonsaiUrl,
  log: 'trace',
});

async function findWorkouts(req, res) {
  const workouts = await client.search({
    index: 'training-plans',
    q: `subcategory:${req.params.subcategory}`,
  });

  res.json(workouts.hits.hits);
}

module.exports = {
  findWorkouts,
}