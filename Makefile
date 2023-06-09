install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even

brain-calc:
	node bin/brain-calc

brain-gcd:
	node bin/brain-gcd

brain-progression:
	node bin/brain-progression

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint --fix .

record:
	asciinema rec
