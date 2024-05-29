let grid;
let w = 10;
let cols, rows;

function setup()
{
    var canvas = createCanvas(400, 400);
    canvas.parent("CanvasP5");

    cols = width / w;
    rows = height / w;
    grid = Make2DArray(cols, rows);
    
    for(let i=0; i<cols; i++)
        {
            for(let j=0; j<rows; j++)
                {
                    grid[i][j] = 0;
                }
            }
            
            grid[20][0] = 1; // Color one cell of the grid white
        }
        
function draw()
{
    background(0);
            
    for(let i=0; i<cols; i++)
    {
        for(let j=0; j<rows; j++)
        {
            stroke(0,100,100);
            fill(grid[i][j]*255);
            let x = i*w;
            let y = j*w;
            square(x,y,w);
        }
    }

    let nextGrid= Make2DArray(cols,rows);
    for (let i = 0; i < cols; i++) 
    {
        for (let j = 0; j < rows; j++) 
        {
            let state = grid[i][j];

            // The strict equality operator (===) behaves identically to the abstract 
            // equality operator (==) except no type conversion is done, and the types 
            // must be the same to be considered equal.
            //The == operator will compare for equality after doing any necessary type 
            // conversions. The === operator will not do the conversion, so if two 
            // values are not the same type === will simply return false. Both are 
            // equally quick.
            //
            // Check if the state of the cell is equal to one.
            if(state === 1)
            {
                let below = grid[i][j+1];
                // if the cell below this cell is 0 then this cell in the next grid or frame of the simulation
                // should be 0 and the cell below should be 1 to simulate falling sand.
                if (below === 0)
                {
                    nextGrid[i][j] = 0;
                    nextGrid[i][j+1] = 1;
                }
            }
        }        
    }

    grid = nextGrid;
}

function Make2DArray(cols, rows)
{
    let array = new Array(cols);
    for (let i=0; i<array.length; i++)
    {
        array[i] = new Array(rows);

        for (let j = 0; j < array[i].length; j++) 
        {
            array[i][j] = 0;            
        }
    }
    return array;
}