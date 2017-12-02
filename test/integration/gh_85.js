var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'yakında orada olacağım';
var result = sentiment(dataset);

test('synchronous positive gh85', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 0);
    t.equal(result.comparative, 0);
    t.equal(result.tokens.length, 3);
    t.equal(result.words.length, 0);
    t.end();
});
