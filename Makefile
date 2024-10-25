help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} \
	/^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } \
	/^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) }' $(MAKEFILE_LIST)

run_main: ## Compile & run main.ts
	cd src && \
	tsc main.ts && \
	node main.js

run_react: ##Run react app (host)
	npm install && \
	npm run dev

run_reactdc: ##Run react app (for running inside dev container)
	npm install && \
	npm run dev -- --host

rm_nm: ##Rm node modules
	rm -rf node_modules

rm_dist: ##Clear dist (dev)
	cd src && \
	rm -rf dist