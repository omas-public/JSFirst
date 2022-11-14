#!/bin/bash

basedir=$1
files=$(ls $basedir/*.dat)

for file in $files
do
  fname=$(basename $file '.dat')
  node createTest.js < $file > "../temp/$fname.spec.js"
done
