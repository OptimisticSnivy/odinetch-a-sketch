var colors = ["gold", "royalblue", "red"];
const buttonColors = ["gold", "royalblue"];
let temp = 1;

let delegate = document.querySelector(".delegate");
let gridContainer= document.createElement("div");
gridContainer.className = "gridContainer"

let grid= document.createElement("div");
let classNaming = "grid"
grid.className = classNaming;

let n = 10;

for(let i=0; i<n; i++){
	gridContainer.appendChild(grid.cloneNode(true));
}

for(let i=0; i<n; i++){
	delegate.appendChild(gridContainer.cloneNode(true));
}

let hover = document.body.querySelector(".delegate");
hover.addEventListener('mouseover', function(event){
	if (event.target.classList.contains("grid")) {
		let randomColor = colors[Math.floor(Math.random() * colors.length)];
		event.target.style.backgroundColor = randomColor;
	}
});

