const cmps = document.getElementsByClassName("calcN"),
	ini = cmps[0], fin = cmps[1], fz = cmps[2], bz = cmps[3],
	res = document.getElementsByClassName("desc")[0];
function azar () {
	ini.value = 1 + redo((mran(90)));
	fin.value = 10 + redo((mran(90)));
	fz.value = 2 + redo(mran(10));
	bz.value = 2 + redo(mran(10));
}
function mran (max = 2) {
	return Math.random () * max;
}
function redo (num) {
	return Math.floor (num + 0.5);
}
function jugar () {
	res.innerHTML = "";
	/* REDONDEAMOS LOS NUMEROS PARA PRECISION */
	ini.value = redo(+ini.value); // < Usa el operador para que lo convierta a num
	fin.value = redo(+fin.value);
	fz.value = redo(+fz.value);
	bz.value = redo(+bz.value);
	let num = "", min = ini.value, max = fin.value;
	if (fin.value < ini.value) { min = fin.value; max = ini.value; }
	for (let i = min; i <= max; i ++) {
		//console.log (i);
		let tmp = i;
		if (i % bz.value == 0)
			tmp = "Buzz";
		if (i % fz.value == 0) {
			tmp = "Fizz";
			if (i % bz.value == 0)
				tmp += "Buzz";
		}
		res.innerHTML += (i == max) ? tmp + "..." : tmp + ", ";
	}
	res.scrollIntoView();
	animar('pulsar', res);
}