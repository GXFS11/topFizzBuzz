const cmps = document.getElementsByClassName("calcN"),
	ini = cmps[0], fin = cmps[1], fz = cmps[2], bz = cmps[3],
	res = document.getElementsByClassName("desc")[0];
function azar () {
	ini.value = 1 + (mran(90));
	fin.value = 10 + (mran(90));
	fz.value = 2 + mran(10);
	bz.value = 2 + mran(10);
}
function mran (max = 2) {
	return Math.random () * max;
}
function jugar () {
	res.innerHTML = "";
	let num = "", min = ini.value, max = fin.value + 1;
	if (fin.value < ini.value) { min = fin.value; max = ini.value + 1; }
	for (let i = min; i < max; i ++) {
		//console.log (i);
		let tmp = i;
		if (i % bz.value == 0)
			tmp = "Buzz";
		if (i % fz.value == 0) {
			tmp = "Fizz";
			if (i % bz.value == 0)
				tmp += "Buzz";
		}
		res.innerHTML += (i + 1 == max) ? tmp + "..." : tmp + ", ";
	}
}