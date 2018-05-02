# COLORS
GREEN := $(shell tput -Txterm setaf 2)
WHITE := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
CYAN := $(shell tput -Txterm setaf 6)
RESET := $(shell tput -Txterm sgr0)

BABEL_CACHE_PATH=./node_modules/babel/cache.json
NODE_MODULES_BIN=./node_modules/.bin
HELP_FUN = \
	%help; \
	while(<>) { \
			if(/^([a-z0-9_-]+):.*\#\#(?:@(\w+))?\s(.*)$$/) { \
					push(@{$$help{$$2}}, [$$1, $$3]); \
			} \
	}; \
	print "usage: make [target]\n\n"; \
	for (sort keys %help) { \
		print "${WHITE}$$_:${RESET}\n"; \
		for (@{$$help{$$_}}) { \
			$$sep = " " x (32 - length $$_->[0]); \
			print "  ${CYAN}$$_->[0]${RESET}$$sep${RESET}$$_->[1]\n"; \
		}; \
		print "\n"; \
	}

.PHONY: help test

help: ##@default print help
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)

commitlint: ##@lint Lint commit message with commitlint package
	@$(NODE_MODULES_BIN)/commitlint -e $$GIT_PARAMS

build: ##@webpack Build this application
	@$(NODE_MODULES_BIN)/webpack --config webpack.config.js

watch: ##@webpack Watch this application
	@$(NODE_MODULES_BIN)/webpack --watch

start: ##@webpack Start this application
	@$(NODE_MODULES_BIN)/webpack-dev-server --mode development --config webpack.config.js

start-debug: ##@webpack Start this application in debug
	@DEBUG=leopardus:* DEBUG_HIDE_DATE=true DEBUG_COLORS=true make start

test: ##@test Test application
	@make test-cs

test-cs: ##@test Test javascript code style
	@echo "${YELLOW}> Testing javascript code style...${RESET}"
	@$(NODE_MODULES_BIN)/eslint ./src/** --max-warnings 5 --cache
	@echo "${GREEN}✓ Great! Your code is soo stylish${RESET}"

test-unit: ##@test Unit test javascript
	@echo "${YELLOW}> Testing unit...${RESET}"
