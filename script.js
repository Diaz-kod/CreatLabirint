
document.querySelector('#elem').onmousemove = function(event) {
	event = event || window.event
	document.querySelector('#offx').innerHTML = event.offsetX;
	document.querySelector('#offy').innerHTML = event.offsetY;
}


let arr = [
	['S', 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[1, 1, 1, 1, 0, 0, 0, 1, 1, 'F'],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
 console.log(arr)

 let elem = document.querySelector('#elem');

function createTable(parent, arr) {
const table = document.createElement('table');
	for(let i = 0; i < arr.length; i++) {
		const row = document.createElement('tr');
		for(let j = 0; j < arr.length; j++) {
			const cell = document.createElement('td');
			cell.append(arr[i][j]);
			cell.classList.add('cell')
			if(arr[i][j] == 0) {
				cell.classList.remove('cell');
				cell.classList.add('cell-2')
			}
			if(arr[i][j] == 'S') {
				cell.classList.add('cell-3');
			}
			if(arr[i][j] == 'F') {
				cell.classList.add('cell-4');
			}
			row.appendChild(cell);
			row.classList.add('string-table')
		}
			table.appendChild(row);
			table.classList.add('parent_1')
	}
	 parent.appendChild(table);
}


createTable(elem, arr);