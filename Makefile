.PHONY: all build test clean

all: build test

build: index.mjs

%.mjs: %.mts
	npx tsc --pretty
	npx webpack

test: index.mjs test/maxmind.spec.js
	node test/*.js

test/%.spec.js: test/%.spec.ts
	npx tsc --project test/ --pretty

clean:
	npx tsc --build test --clean
	npx tsc --build --clean
	- rm -f test/maxmind.spec.js index.d.mts index.mjs
