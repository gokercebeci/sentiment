var test = require('tap').test;
var sentiment = require('../../lib/index');

//TODO
var dataset = 'Senden nefret etmiyorum';
var result = sentiment(dataset);

test('synchronous negation', function (t) {
    t.type(result, 'object');
    t.equal(result.score, -3);
    t.equal(result.comparative, -1);
    t.equal(result.tokens.length, 3);
    t.equal(result.words.length, 1);
    t.end();
});

//
//TODO deal with negation
// test('synchronous negation', function (t) {
//     t.type(result, 'object');
//     t.equal(result.score, 3);
//     t.equal(result.comparative, 0.75);
//     t.equal(result.tokens.length, 4);
//     t.equal(result.words.length, 1);
//     t.end();
// });
