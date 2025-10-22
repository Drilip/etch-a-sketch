const canvasSize = 960;
let gridSize;
let cellSize;
const initialSliderEvent = new Event("input");
initialSliderEvent.value = 16

gridContainer = document.querySelector("div.grid-container");
gridContainer.style.width = canvasSize + "px";
gridContainer.style.height = canvasSize + "px";


function createGrid() {
    for (let rowIdx = 0; rowIdx < gridSize; rowIdx++) {
        row = document.createElement("div");
        row.className = "grid-row";
        row.id = "row-" + rowIdx;
        gridContainer.appendChild(row);

        for (let colIdx = 0; colIdx < gridSize; colIdx++) {
            cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.id = "cell-" + rowIdx + "-" + colIdx;
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            row.appendChild(cell);
        };
    };
};



function sliderEventHandler() {
    gridContainer.textContent = "";
    gridSize = Number(slider.value);
    cellSize = canvasSize / gridSize;
    createGrid();
}


function hoverOverCell(e) {
    cell = e.target;
    if (!(cell.className === "grid-cell")) return
    cell.style.backgroundColor = "black";
};

function clickClearBtn(e) {
    // Simply reset by firing a slider event to the current value
    const sliderEvent = new Event("input");
    sliderEvent.value = gridSize;
    slider.dispatchEvent(sliderEvent);
};



slider = document.querySelector("input.slider")
slider.addEventListener("input", sliderEventHandler);

// Fire an initial slider event
slider.dispatchEvent(initialSliderEvent);

// Color the grid
gridContainer.addEventListener("mouseover", hoverOverCell);

// Reset the grid
resetButton = document.querySelector("#clear-button");
resetButton.addEventListener("click", clickClearBtn);
