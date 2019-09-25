#!/usr/bin/env bash
mongorestore "tests/business/random_test" --host 127.0.0.1 --port 27017 --drop --db random_test
