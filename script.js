const colors = ["gold", "royalblue", "red"]

let delegate = document.querySelector(".delegate");
let gridContainer= document.createElement("div");
gridContainer.className = "gridContainer"

let grid= document.createElement("div");
let classNaming = "grid"
grid.className = classNaming;

let n = 16;

for(let i=0; i<n; i++){
	gridContainer.appendChild(grid.cloneNode(true));
}

for(let i=0; i<n; i++){
	delegate.appendChild(gridContainer.cloneNode(true));
}

let hover = document.body.querySelector(".delegate");
hover.addEventListener('mouseover', function(event){
	console.log("hover");
	if (event.target.classList.contains("grid")) {
		let randomColor = colors[Math.floor(Math.random() * colors.length)];
		event.target.style.backgroundColor = randomColor;
	}
});

