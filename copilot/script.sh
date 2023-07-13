#!/bin/bash
# find number of lines in a file
wc -l $1
# find 'google' in all files with txt extension
grep -i 'google' *.txt

