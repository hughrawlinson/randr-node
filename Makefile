test:
	./node_modules/.bin/jscoverage lib lib-cov
	./node_modules/.bin/mocha -R mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js

clean:
	rm -rf coverage lib-cov node_modules coverage.html

.PHONY: test