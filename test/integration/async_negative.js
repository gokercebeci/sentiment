var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Hey sen işeyaramaz çöp torbası';
sentiment(dataset, function (err, result) {
    test('asynchronous negative', function (t) {
        t.type(result, 'object');
        t.equal(result.score, -2);
        t.equal(result.comparative, -0.4);
        t.equal(result.tokens.length, 5);
        t.equal(result.words.length, 1);
        t.end();
    });
});
