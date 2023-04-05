
const resizeButton = document.querySelector(".sizeBtn");
resizeButton.addEventListener("click", inputGridSize);


function generate_Grid(gridSize)
{

      //generate grid size column div  
      const containerDiv = document.querySelector(".containerDiv");
    for (let i = 0; i < gridSize; i++)
    {
       
        const horizontalContainer = document.createElement("div"); 
        horizontalContainer.classList.add("horizontalContainer");
        containerDiv.appendChild(horizontalContainer);

        //generate gridsize horizontal divs for each column div
        for (let j = 0; j < gridSize; j++) {
            const gridElements = document.createElement("div");
            gridElements.classList.add("gridElements");
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
        console.log(`there is currently an elemtn that should be selected rn`);
    });
     
    
}

function inputGridSize()
{
    let gridSize = Number(prompt(`please enter the size of the grid`));
    
    //remove the current grid arrangement
    const grid = document.querySelectorAll(".horizontalContainer");
    grid.forEach(element => element.remove())
    
    

    generate_Grid(gridSize);
    hoverEffect();
}

generate_Grid(16);
hoverEffect();