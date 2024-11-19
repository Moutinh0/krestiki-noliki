import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [boardSize, setBoardSize] = useState(3);
    const [board, setBoard] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setBoard(Array.from({ length: boardSize }, () => Array(boardSize).fill(null)));
        setWinner(null);
        setCurrentPlayer("X");
    }, [boardSize]);

    useEffect(() => {
        axios.get("http://localhost:3001/history").then((response) => setHistory(response.data));
    }, []);

    const checkWinner = (board) => {
        const checkLine = (line) => line.every((cell) => cell && cell === line[0]);

        for (let i = 0; i < boardSize; i++) {
            if (checkLine(board[i])) return board[i][0];
            if (checkLine(board.map((row) => row[i]))) return board[0][i];
        }

        if (checkLine(board.map((row, i) => row[i]))) return board[0][0];
        if (checkLine(board.map((row, i) => row[boardSize - i - 1]))) return board[0][boardSize - 1];

        if (board.flat().every((cell) => cell)) return "Ничья";
        return null;
    };

    const handleCellClick = (row, col) => {
        if (board[row][col] || winner) return;

        const newBoard = board.map((rowArr, rowIndex) =>
            rowArr.map((cell, colIndex) => (rowIndex === row && colIndex === col ? currentPlayer : cell))
        );

        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
            axios.post("http://localhost:3001/history", {
                winner: gameWinner,
                date: new Date().toISOString(),
                boardSize,
            }).then(() => {
                axios.get("http://localhost:3001/history").then((response) => setHistory(response.data));
            });
        } else {
            setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
        }
    };

    const resetGame = () => {
        setBoard(Array.from({ length: boardSize }, () => Array(boardSize).fill(null)));
        setWinner(null);
        setCurrentPlayer("X");
    };

    return (
        <GameContext.Provider
            value={{
                boardSize,
                setBoardSize,
                board,
                currentPlayer,
                winner,
                history,
                handleCellClick,
                resetGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
