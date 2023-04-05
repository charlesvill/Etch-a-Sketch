
const resizeButton = document.querySelector(".sizeBtn");
resizeButton.addEventListener("click", inputGridSize);


function generate_Grid(gridSize)
{

      //instantiate grid by horizontal rows and populating each row with individual cells
      const containerDiv = document.querySelector(".containerDiv");
    for (let i = 0; i < gridSize; i++)
    {
       
        const horizontalContainer = document.createElement("div"); 
        horizontalContainer.classList.add("horizontalContainer");
        //setting height in JS to dynamically adjust with resizing grid
        horizontalContainer.style.height = 90/gridSize +"vh";
        containerDiv.appendChild(horizontalContainer);


        for (let j = 0; j < gridSize; j++) {
            const gridElements = document.createElement("div");
            gridElements.classList.add("gridElements");
            //setting the dimensions in JS to dynamically adjust with resizing grid
            gridElements.style.width = 100/gridSize + "vh";
            gridElements.style.height = 100/gridSize + "vh";
            horizontalContainer.appendChild(gridElements);
        }
    }
}

function hoverEffect()
{
    //select all elements with gridElements class name and store in an array named tiles
    const tiles = document.querySelectorAll(".gridElements");

    //foreach element inside the tiles variable, add event listener that adds class hover
    tiles.forEach(element => {
        element.addEventListener("mouseover", ()=> {element.classList.add("hover")});
    });
     
    
}

function inputGridSize()
{
    let gridSize = Number(prompt(`please enter the size of the grid`));
    
    if (gridSize<1||gridSize>100)
    {
        alert(' !Sorry, grid must be greater than one, and up to 100!');
        inputGridSize();
    }
    else
    {
        //remove the current grid arrangement
    const grid = document.querySelectorAll(".horizontalContainer");
    grid.forEach(element => element.remove())
    
     generate_Grid(gridSize);
     hoverEffect();
    }
 }

generate_Grid(16);
hoverEffect();