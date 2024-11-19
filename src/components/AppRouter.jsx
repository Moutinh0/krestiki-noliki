import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import { GameProvider } from "../context/GameContext";

export const AppRouter = () => {

    return (
        <GameProvider>
            <Routes>
                {routes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />)
                }
            </Routes>
        </GameProvider>
            
    );
}