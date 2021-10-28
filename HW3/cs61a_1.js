let x = 5;
let y = 4;
function a_plus_abs_b(a,b) {

	let f = add;
	if (b < 0) {
		let f = sub;
	}
	return f(a, b);
}
let z = a_plus_abs_b(x,y);

print(z); 