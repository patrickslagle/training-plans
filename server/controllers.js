const util = require('util');
const elasticsearch = require('elasticsearch');

const bonsaiUrl = 'https://HZWEuRamTP:9cSCUsv24HGfgYPKW@training-plans-sandb-435310341.us-east-1.bonsaisearch.net/';
const client = new elasticsearch.Client({
  host: bonsaiUrl,
  log: 'trace',
});

async function findWorkouts(req, res, next) {
  // const workouts = await client.search({
  //   index: 'training-plans',
  //   q: `subcategory:${req.params.subcategory}`,
  // });

  // res.json(workouts);
}

// async function test(){
//   // console.log('response', response.hits.hits[5])
//   response.hits.hits.forEach((plan, i) => {
//     // console.log('   ')
//     console.log('THIS IS RESPONSE NUMBA', i)
//     console.log('title', plan._source.title)
//     console.log('category', plan._source.category)
//     console.log('subcategory', plan._source.subcategory)
//     console.log('weeks', plan._source.weeksDuration)

//     // console.log('price', plan._source.price)
//     // console.log('workoutCount', plan._source.workoutCount)
//     // console.log('workoutTypes', plan._source.workoutTypesInPlan)
//     // console.log('averageHourse', plan._source.averageHoursPerWeek)
//     // console.log('daysDuration', plan._source.daysDuration)
//     // console.log('permalink', plan._source.permalink)
//     // console.log('description', plan._source.description)
//   })
//   // console.log('response', response.hits.hits[0])
//   // console.log('RESPONSE RESPONSE RESPONSE', util.inspect(response.hits.hits, {showHidden: false, depth: null}))
//   // console.log('aggregations', response.hits.hits[5]._source.weeklyWorkoutAggregations.length);
//   // console.log('total', response.hits.hits[5]._source.totalWorkoutAggregations.length);
//   // console.log('avg', response.hits.hits[5]._source.averageWorkoutAggregations.length);
//   // console.log('sample', response.hits.hits[5]._source.sampleWorkouts.length);
// }
// test();

module.exports = {
  findWorkouts,
}