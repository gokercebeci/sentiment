var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Bu çok iyi';
sentiment(dataset, function (err, result) {
    test('asynchronous positive', function (t) {
        t.type(result, 'object');
        t.equal(result.score, 3);
        t.equal(result.comparative, 1);
        t.equal(result.tokens.length, 3);
        t.equal(result.words.length, 1);
        t.end();
    });
});
