import React from "react";
import Quiz from "./components/Quiz";
import "./index.css";
import Leaderboard from "./components/Leaderboard";
import QuizStats from "./components/QuizStats";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { render } from "react-dom";
import QuizScience from "./components/Quiz/QuizScience";
import QuizHistory from "./components/Quiz/QuizHistory";
import QuizSports from "./components/Quiz/QuizSports";

const [quiz, setQuiz] = "";
const handleRedirect = (response) => {
  setQuiz(response);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home onRedirect={handleRedirect} />,
  },
  {
    path: "/home2",
    element: <Home2 />,
  },
  {
    path: "/quiz/science",
    element: <QuizScience />,
  },
  {
    path: "/quiz/history",
    element: <QuizHistory />,
  },
  {
    path: "/quiz/sports",
    element: <QuizSports />,
  },
  {
    path: "/quizstats",
    element: <QuizStats />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
