class ChessGame {
    constructor() {
        this.board = this.createBoard();
        this.selectedPiece = null;
        this.turn = 'white';
        this.setupBoard();
    }

    createBoard() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i][j] = null;
            }
        }
        return board;
    }

    setupBoard() {
        const layout = ["R", "N", "B", "Q", "K", "B", "N", "R"];
        
        for (let i = 0; i < 8; i++) {
            this.board[0][i] = { piece: layout[i], color: 'black' };
            this.board[1][i] = { piece: 'P', color: 'black' };
            this.board[6][i] = { piece: 'P', color: 'white' };
            this.board[7][i] = { piece: layout[i], color: 'white' };
        }
    }

    renderBoard() {
        const chessboard = document.createElement('div');
        chessboard.className = 'chessboard';
        document.body.appendChild(chessboard);

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.className = `square ${(i + j) % 2 === 0 ? 'light' : 'dark'}`;
                square.dataset.row = i;
                square.dataset.col = j;

                if (this.board[i][j]) {
                    const piece = document.createElement('span');
                    piece.className = `piece ${this.board[i][j].color}`;
                    piece.innerText = this.board[i][j].piece;
                    square.appendChild(piece);
                }
                chessboard.appendChild(square);
            }
        }
    }
}

window.onload = () => {
    const game = new ChessGame();
    game.renderBoard();
};