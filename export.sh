#!/bin/bash

cd $1
git add -A
git commit -m "BSS Auto-Update"
git push origin master
