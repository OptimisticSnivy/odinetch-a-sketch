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
	document.body.appendChild(gridContainer.cloneNode(true));
}

