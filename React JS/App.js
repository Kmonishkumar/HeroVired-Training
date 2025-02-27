// import React from 'react';
// import './App.css';
// import CounterComponent from './CounterComponent';
// import TitleUpdaterComponent from './TitleUpdaterComponent';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <CounterComponent />
//                 <TitleUpdaterComponent />
//                 </header>

//         </div>
//     );
// };
// export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    // Check if the current player has won
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Handle square click
    const handleClick = (index) => {
        if (squares[index] || winner) return; // Ignore click if square is filled or game is over

        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        setWinner(calculateWinner(newSquares));
    };

    // Render the board
    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {squares[index]}
            </button>
        );
    };

    // Reset game
    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    return (
        <div className="game">
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>

            <div className="status">
                {winner ? (
                    <p>Winner: {winner}</p>
                ) : (
                    <p>Next Player: {xIsNext ? 'X' : 'O'}</p>
                )}
            </div>

            <button className="restart-button" onClick={handleRestart}>
                Restart Game
            </button>
        </div>
    );
}

export default App;


