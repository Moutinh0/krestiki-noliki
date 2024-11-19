import axios from "axios";
import { useEffect, useState } from "react";
import GameControls from "./GameControls";
import GameBoard from "./GameBoard";
import { useNavigate } from "react-router-dom";
import '../styles/MainPage.css'
import { useGameContext } from "../context/GameContext";

function MainPage() {
  const { board, handleCellClick, resetGame, boardSize, setBoardSize, currentPlayer, winner } = useGameContext();
  const navigate = useNavigate();

  return (
      <div>
          <h1>Крестики-Нолики</h1>
          <GameControls />
          <GameBoard />
          <button onClick={() => navigate("/history")} className="navigate-button">Перейти к истории игр</button>
      </div>
  );
}

export default MainPage;