import React from "react";
import "./index.css";
import Leaderboard from "./components/Leaderboard";
import QuizStats from "./components/QuizStats";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import { HashRouter, Route, Routes } from "react-router-dom";
import QuizScience from "./components/Quiz/QuizScience";
import QuizHistory from "./components/Quiz/QuizHistory";
import QuizSports from "./components/Quiz/QuizSports";

export default function App() {
  return (
    <HashRouter basename="https://falgunmpatel.github.io/Assignment_DOTIX/#/app">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home2" Component={Home2} />
        <Route path="/quiz/science" Component={QuizScience} />
        <Route path="/quiz/history" Component={QuizHistory} />
        <Route path="/quiz/sports" Component={QuizSports} />
        <Route path="/quizstats" Component={QuizStats} />
        <Route path="/leaderboard" Component={Leaderboard} />
      </Routes>
    </HashRouter>
  );
}
