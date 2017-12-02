var test = require('tap').test;
var tokenize = require('../../lib/tokenize');

test('spec', function (t) {
    t.type(tokenize, 'function');
    t.type(tokenize('foo'), 'object');
    t.equal(tokenize('foo bar').length, 2);

    t.throws(function () {
        tokenize(123);
    });
    t.throws(function () {
        tokenize({});
    });
    t.throws(function () {
        tokenize([]);
    });

    t.end();
});

test('english', function (t) {
    t.deepEqual(
        tokenize('Kedi duvarın arkasına gitti.'),
        ['kedi', 'duvarın', 'arkasına', 'gitti']
    );
    t.deepEqual(
        tokenize('Çiftçi\'nin domuzları soruna neden olacak'),
        ['çiftçi\'nin', 'domuzları', 'soruna', 'neden', 'olacak']
    );
    t.end();
});

test('diacritic', function (t) {
    t.deepEqual(
        tokenize('Bu yaklaşım naïve.'),
        ['bu', 'yaklaşım', 'naïve']
    );
    t.deepEqual(
        tokenize('Minikler takımı çok coöperative.'),
        ['minikler', 'takımı', 'çok', 'coöperative']
    );
    t.deepEqual(
        tokenize('Bu soufflé çok lezzetli!'),
        ['bu', 'soufflé', 'çok', 'lezzetli']
    );
    t.end();
});
