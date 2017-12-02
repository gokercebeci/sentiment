var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Bu çok iyi';
var result = sentiment(dataset, {'iyi': 100});

test('synchronous inject', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 100);
    t.equal(result.comparative, 33.333333333333336);
    t.equal(result.tokens.length, 3);
    t.equal(result.words.length, 1);
    t.end();
});
