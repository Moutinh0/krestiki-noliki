import GameHistoryPage from "./components/GameHistoryPage"

import MainPage from "./components/MainPage"

export const routes = [
    {
        path: '/history', element: <GameHistoryPage></GameHistoryPage>, exact: false        
    },
    {
        path: '/', element: <MainPage></MainPage>, exact: false  
    }
]