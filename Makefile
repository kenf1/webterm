help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} \
	/^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } \
	/^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) }' $(MAKEFILE_LIST)

npm_logs: ##Clear all npm logs
	cd ../../root/.npm && \
	rm -rf _logs && \
	ls

rm_nm: ##Rm all node_modules
	npx npkill

define pkg_run
	cd $(1) && \
	tsc --target es2023 $(2).ts && \
	node $(2).js
endef

rundev: ##Run dev
	$(call pkg_run,Dev,dev)

tidydev: ##Clear all unnecessary files from Dev folder
	cd Dev && \
	rm *.js

tidyall: tidydev ## Clear all unnecessary files from all folders
	cd webterm/Logic && \
	rm *.js

define npm_run
	cd $(1) && \
	npm install && \
	npm run dev -- --host
endef

run_react: ##Run react app (host)
	cd webterm && \
	npm install && \
	npm run dev

run_reactdc: ##Run react app (inside dev container)
	$(call npm_run,webterm)

rm_dist: ##Clear dist (dev)
	cd webterm && \
	rm -rf dist