import React from "react";
import '../styles/GameControls.css'
import { useGameContext } from "../context/GameContext";

function GameControls() {
    const { resetGame, boardSize, setBoardSize, currentPlayer, winner } = useGameContext();

    return (
        <div className="controls">
            <div>
                <label htmlFor="boardSize">Размер поля:</label>
                <select
                    id="boardSize"
                    value={boardSize}
                    onChange={(e) => setBoardSize(Number(e.target.value))}
                    disabled={winner}
                >
                    <option value={3}>3x3</option>
                    <option value={5}>5x5</option>
                    <option value={12}>12x12</option>
                </select>
            </div>
            <div className="info">
                {winner ? (
                    <p>{winner === 'Ничья' ? 'Игра окончена: Ничья!' : `Победитель: ${winner}`}</p>
                ) : (
                    <p>Текущий ход: {currentPlayer}</p>
                )}
            </div>
            <button onClick={resetGame}>Начать заново</button>
        </div>
    );
}

export default GameControls;