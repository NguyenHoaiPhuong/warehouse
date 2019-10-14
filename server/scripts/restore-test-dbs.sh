#!/usr/bin/env bash
mongorestore "tests/business/ITV" --host 127.0.0.1 --port 27017 --drop --db ITV
