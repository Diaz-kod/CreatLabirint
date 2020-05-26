
function single(arr) {
	let result = []
	for(let i = 0; i < 10; i++) {
		result.push(Math.floor(Math.random() * 10));
		if(result > 10) {
			return result
		}
	}
	return result
}

console.log(single())

let offset = 0;

function move() {
	offset = offset + 5;
	document.querySelector('.col_1').style.left = offset + 'px';
	if(offset > 1800) {
		return true
	}
	setTimeout(move, 90);
}

document.querySelector('button').onclick = move;

