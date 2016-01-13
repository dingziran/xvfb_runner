#!/bin/bash
kill `ps -ef|awk '$3 == 1 && $8 ~ /electron/{print $2}'`