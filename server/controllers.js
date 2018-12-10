require('dotenv').config();
const elasticsearch = require('elasticsearch');

const bonsaiUrl = process.env.Bonsai_URL;
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