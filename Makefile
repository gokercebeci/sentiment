ESLINT=./node_modules/.bin/eslint
TAP=./node_modules/.bin/tap

# ------------------------------------------------------------------------------

# Builds a JSON representation of the raw AFINN-TR word list
build:
	node ./build/build.js

# ------------------------------------------------------------------------------

lint:
	$(ESLINT) ./lib/*.js
	$(ESLINT) ./build/*.js
	$(ESLINT) ./test/**/*.js

test:
	@make lint
	@make validate
	$(TAP) ./test/{unit,integration}/*.js

unit:
	$(TAP) ./test/unit/*.js

# ------------------------------------------------------------------------------

coverage:
	$(TAP) ./test/{integration,unit}/*.js --coverage --coverage-report=lcov

# ------------------------------------------------------------------------------

benchmark:
	node ./test/benchmark/performance.js

validate:
	node ./test/benchmark/validate.js

# ------------------------------------------------------------------------------

.PHONY: build lint test coverage benchmark validate
