test:
	@./node_modules/.bin/mocha

clean:
	rm -rf coverage

.PHONY: test