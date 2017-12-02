var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Bu çok iyi 😃';
var result = sentiment(dataset);

test('synchronous positive with emoji', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 5);
    t.equal(result.comparative, 1.25);
    t.equal(result.tokens.length, 4);
    t.equal(result.words.length, 2);
    t.end();
});
