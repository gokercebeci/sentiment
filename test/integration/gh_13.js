var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'inşaatçı';
var result = sentiment(dataset);

test('synchronous positive gh13', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 0);
    t.equal(result.comparative, 0);
    t.equal(result.tokens.length, 1);
    t.equal(result.words.length, 0);
    t.end();
});
