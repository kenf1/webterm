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

# run_luhn: ##Compile & run luhn-algo
# 	$(call pkg_run,luhn-algo,main)

run_args: ##Run args
	$(call pkg_run,args,parseArgs)

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

tidy_subpkg: ##Tidy subpackages used in webterm
	cd luhn-algo && \
    rm *.js && \
    cd ../args && \
    rm *.js

rm_dist: ##Clear dist (dev)
	cd webterm && \
	rm -rf dist
