const container = document.getElementById("container");

makeGrid(4);


function reset() {
	let container = document.getElementById("container");
	while(container.firstChild) {
		container.removeChild(container.firstChild);
	}

	let size = prompt("Grid reset. Enter a size for new grid");
	makeGrid(size);
}

function makeGrid(size) {
	for(let i = 0; i < size; i++) {
		let column = document.createElement("div");
		for(let j = 0; j < size; j++) {
			let box = document.createElement("div");
			box.classList.add("box");
			box.style.height = `${100 / size}%`;
			column.appendChild(box);
		}
		column.classList.add("column");
		column.style.width = `${100 / size}%`;
		container.appendChild(column);
	}

	const boxes = [].slice.call(document.querySelectorAll(".box"));


	boxes.forEach((box) => {
		box.addEventListener('mouseenter', function() {
			box.style.backgroundColor = "black";
		});
		box.addEventListener('click', reset);
	});
}