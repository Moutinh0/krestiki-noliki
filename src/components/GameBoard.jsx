import React from "react";
import '../styles/GameBoard.css'
import { useGameContext } from "../context/GameContext";

function GameBoard() {

    const { board, handleCellClick, winner } = useGameContext();

    return (
        <div
            className="board"
            style={{
                gridTemplateRows: `repeat(${board.length}, 1fr)`,
                gridTemplateColumns: `repeat(${board.length}, 1fr)`,
            }}
        >
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`cell ${cell ? 'occupied' : ''}`}
                        onClick={() => !cell && !winner && handleCellClick(rowIndex, colIndex)}
                    >
                        {cell}
                    </div>
                ))
            )}
        </div>
    );
}

export default GameBoard;
