import React from "react";
import '../styles/GameHistoryPage.css'
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context/GameContext";


function GameHistoryPage() {
  const { history } = useGameContext();
  const navigate = useNavigate();

  return (
      <div className="history-page">
          <h2>История игр</h2>
          {history.length === 0 ? (
              <p>История игр пуста</p>
          ) : (
              <ul>
                  {history.map((game, index) => (
                      <li key={index}>
                          <p>Победитель: {game.winner}</p>
                          <p>Дата: {new Date(game.date).toLocaleString()}</p>
                          <p>Размер поля: {game.boardSize}x{game.boardSize}</p>
                      </li>
                  ))}
              </ul>
          )}

          <button onClick={() => navigate("/")} className="navigate-button">Перейти к игре</button>
      </div>
  );
}

export default GameHistoryPage;