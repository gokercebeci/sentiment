var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'Hey sen işeyaramaz çöp torbası 😦';
sentiment(dataset, function (err, result) {
    test('asynchronous negative text and emoji', function (t) {
        t.type(result, 'object');
        t.equal(result.score, -4);
        t.equal(result.comparative, -0.6666666666666666);
        t.equal(result.tokens.length, 6);
        t.equal(result.words.length, 2);
        t.end();
    });
});
