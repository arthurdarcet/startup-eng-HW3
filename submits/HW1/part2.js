#!/usr/bin/env node
var res = [], i = 2;
while (res.length < 100) {
	res.reduce(function(p, j) { return p && i%j != 0; }, true) && res.push(i);
	i++;
}
require('fs').writeFileSync("part2.out", res.join());  
