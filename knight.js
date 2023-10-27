class Square {
    constructor(coordinates, parent = null) {
        this.coordinates = coordinates;
        this.children = [];
        this.parent = parent;
    }
}

class Board {
    constructor() {
        this.boardArray = this.#makeBoardArray();
    }

    #makeBoardArray() {
        let boardArray = [];
        let lineArray = [];
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                let sq = new Square([x, y]);
                lineArray.push(sq);
            }
            boardArray.push(lineArray);
            lineArray = [];
        }
        return boardArray;
    }

    find([x, y]) {
        if (!this.#isInsideBoard([x, y])) return null;

        return this.boardArray[x][y];
    }

    #listAllSquares() {
        let arr = [];
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                arr.push([x, y]);
            }
        }
        return arr;
    }

    #compare(arr1, arr2) {
    // assumes same number of elements
        for (let index = 0; index < arr1.length; index++) {
            if (arr1[index] != arr2[index]) {
                return false;
            }
        }
        return true;
    }

    #includesArray(sourceArray, searchElement) {
    // assumes same number of elements
        for (let index = 0; index < sourceArray.length; index++) {
            if (this.#compare(sourceArray[index], searchElement)) return true;
        }
        return false;
    }

    knightMoves(start, end) {
        // todo: add check if start & end are valid coordinates

        let queue = [start];
        let unvisitedSquares = this.#listAllSquares();
        
        while (queue.length > 0) {
            if (unvisitedSquares.length == 0) {
                break;
            }

            let currentCoordinates = queue.shift();
            
            if (this.#includesArray(unvisitedSquares, currentCoordinates)) {
                let currentSquare = this.find(currentCoordinates);
                unvisitedSquares = unvisitedSquares.filter( (element) => !this.#compare(element, currentCoordinates) );
                this.#makeChildren(currentSquare, unvisitedSquares);
                currentSquare.children.forEach(child => {
                    queue.push(child.coordinates);
                });

                if (this.#compare(end, currentCoordinates)) {
                    this.#showParent(start, end);
                    break;
                }
            }
        }
    }

    #showParent(start, end) {
        let currentSquare = this.find(end);
        let path = [];
        while (currentSquare) {
            console.log(currentSquare)
            path.push(currentSquare.coordinates);
            currentSquare = currentSquare.parent;
        }
        
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        for (let index = path.length - 1; index >= 0; index--) {
            console.log(path[index]);
            
        }
    }

    #makeChildren(square, unvisitedSquares) {
        let moves = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1]];
        
        moves = moves.map( ([a, b]) => [a + square.coordinates[0], b + square.coordinates[1]] );
        moves = moves.filter( (move) => this.#isInsideBoard(move));
        moves = moves.filter( (move) => this.#includesArray(unvisitedSquares, move));

        square.children = moves.map( (move) => this.find(move) );
        this.#assignParent(square.children, square);
    }

    #assignParent(children, parent) {
        children.forEach(child => {
            child.parent = parent;
        });
    }

    #isInsideBoard([x, y]) {
        if (x <= 7 && x >= 0 && y <= 7 && y >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

let board = new Board();

board.knightMoves([0,0], [7, 7]);
