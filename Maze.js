// Define what's the map like
// Define tile name
const Tile = {
    WALL: 0,
    FLOOR: 1,
    DoorBlue: 2,
    DoorYellow: 3,
    KeyBlue: 4,
    KeyYellow: 5,
    POTION_HP: 6,
    POTION_MP: 7,
    SLIME_RED: 8,
    SLIME_GREEN: 9,
    BAT: 10,
    SKELETON: 11,
    DecorTile: 12,
    Ruby: 13,
    Sapphire: 14,
    YOU: 15,
    Stair: 16,
    SHOP: 17,
    WIZARD: 18
};
// Map Array
const Maze = [
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   0,   0,  0  ], // 0
    [ 0, 15,  1,  1,  4,  1,  8,  1,  1,  1,   5,   1,  0  ], // 1
    [ 0,  1, 11,  0,  1,  0,  1,  0,  9,  0,   1,   6,  0  ], // 2
    [ 0,  1,  1,  1,  1,  12, 1,  1,  1,  1,   1,   1,  0  ], // 3
    [ 0,  6,  0,  9,  0,  1,  0,  10, 0,  11,  0,   7,  0  ], // 4
    [ 0,  1,  1,  1,  1,  13, 1,  1,  1,  1,   1,   1,  0  ], // 5
    [ 0,  1,  0, 10,  0,  1,  16, 1,  0,  9,   0,   1,  0  ], // 6
    [ 0,  1,  12, 1,  1,  14, 1,  1,  1,  1,   12,  1,  0  ], // 7
    [ 0,  7,  0, 11,  0,  1,  0,  3,  0,  11,  0,   6,  0  ], // 8
    [ 0,  1,  1,  1,  1,  1,  1,  1,  1,  1,   1,   1,  0  ], // 9
    [ 0,  1,  8,  1,  4,  1,  17, 1,  5,  1,   10,  1,  0  ], // 10
    [ 0,  1,  1,  1,  1,  18, 1,  1,  1,  1,   1,   1,  0  ], // 11
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   0,   0,  0  ]  // 12
];
//Draw the map
function renderMap() {
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = "";

    for (let row = 0; row < Maze.length; row++) {
        for (let col = 0; col < Maze[row].length; col++) {
            const tileValue = Maze[row][col];

            // create a tile div
            const tile = document.createElement("div");
            tile.classList.add("tile");

            // add extra class based on tile type
            switch (tileValue) {
                case Tile.WALL:
                    tile.classList.add("wall");
                    break;
                case Tile.FLOOR:
                    tile.classList.add("floor");
                    break;
                case Tile.DoorBlue:
                    tile.classList.add("door-blue");
                    break;
                case Tile.DoorYellow:
                    tile.classList.add("door-yellow");
                    break;
                case Tile.KeyBlue:
                    tile.classList.add("key-blue");
                    break;
                case Tile.KeyYellow:
                    tile.classList.add("key-yellow");
                    break;
                case Tile.POTION_HP:
                    tile.classList.add("potion-hp");
                    break;
                case Tile.POTION_MP:
                    tile.classList.add("potion-mp");
                    break;
                case Tile.SLIME_RED:
                    tile.classList.add("slime-red");
                    break;
                case Tile.SLIME_GREEN:
                    tile.classList.add("slime-green");
                    break;
                case Tile.BAT:
                    tile.classList.add("bat");
                    break;
                case Tile.SKELETON:
                    tile.classList.add("skeleton");
                    break;
                case Tile.DecorTile:
                    tile.classList.add("decor");
                    break;
                case Tile.Ruby:
                    tile.classList.add("ruby");
                    break;
                case Tile.Sappire:
                    tile.classList.add("sapphire");
                    break;
                case Tile.YOU:
                    tile.classList.add("hero");
                    break;
                case Tile.Stair:
                    tile.classList.add("stair");
                    break;
                case Tile.SHOP:
                    tile.classList.add("shop");
                    break;
                case Tile.WIZARD:
                    tile.classList.add("wizard");
                    break;
                default:
                    tile.classList.add("floor");
            }
            // Add images
            tile.style.backgroundImage = `url('imgProj/${tileValue}.jpg')`;
            tile.style.backgroundSize = "cover";
            // Store grid position on the element
            tile.dataset.row = `${row}`;
            tile.dataset.col = `${col}`;
            mapDiv.appendChild(tile);
        }
    }
}
// Find the player
function findPlayer(map) {
    let i, j;
    // outer loop over rows
    for (i = 0; i < map.length; i++) {
        // inner loop over columns
        for (j = 0; j < map[i].length; j++) {
            if (map[i][j] === 15) {
                // found the player, break out of both loops
                return { row, col };
            }
        }
    }
}
