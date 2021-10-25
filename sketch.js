const gridContainer = document.querySelector(".grid-container");

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    gridContainer.style.gridTemplateRows = " 1fr".repeat(rows);
    gridContainer.style.gridTemplateColumns = " 1fr".repeat(cols);
    console.log(cols, rows, gridContainer.style.gridTemplateColumns)
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    };
    document.querySelectorAll(".grid-item").forEach(item => item.addEventListener('mouseover', 
                                function(event) {if (event.buttons ==1 || event.buttons ==3) {event.target.style["background-color"] = color}}))

        
};

function resetGrid() {
    document.querySelectorAll(".grid-item").forEach(item => item.style["background-color"] = "white")
}

function reshapeGrid(slider) {
    gridContainer.innerHTML =  ``;
    makeRows(slider.target.value, slider.target.value);
    
}
makeRows(10, 10);

let color="black";
document.querySelector(".slider").addEventListener( "change", event => {resetGrid(); reshapeGrid(event)}); 
document.querySelector(".reset-button").addEventListener("click", resetGrid);
document.querySelectorAll(".color-button").forEach(item => item.addEventListener('click',
                                function(event) {color = event.target.style["background-color"];console.log(color)}));

    
                             