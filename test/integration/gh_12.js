var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'kendinden kandırılmış';
var result = sentiment(dataset);

test('synchronous positive gh12', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 0);
    t.equal(result.comparative, 0);
    t.equal(result.tokens.length, 2);
    t.equal(result.words.length, 0);
    t.end();
});

//
//TODO
//
// test('synchronous positive gh12', function (t) {
//     t.type(result, 'object');
//     t.equal(result.score, -2);
//     t.equal(result.comparative, -2);
//     t.equal(result.tokens.length, 2);
//     t.equal(result.words.length, 1);
//     t.end();
// });
