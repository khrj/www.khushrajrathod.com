#!/usr/bin/env bash
cd $1
rm -r assets/bootstrap/js
rm -r assets/js
sed -i 's/<script src="assets\/bootstrap\/js\/bootstrap\.min\.js?h=[[:alnum:]]*"><\/script><script src="assets\/js\/script\.min\.js?h=[[:alnum:]]*"><\/script>//' index.html
