import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import Post from "./pages/Post";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const files = [
  {
    title: "First Week in New Company",
    slug: "First-Week-in-New-Company",
  },
  {
    title: "Git Advanced Skill Git Rebase",
    slug: "Git-Advanced-Skill-Git-Rebase",
  },
  {
    title: "Recursion",
    slug: "Recursion",
  },
  {
    title: "Some JavaScript Array Fundamentals",
    slug: "Some-Javascript-Array-Fundamentals",
  },
  {
    title: "Some Reflections on My Job Hunting",
    slug: "Some-Reflections-on-My-Job-Hunting",
  },
  {
    title: "VS Code Plugins",
    slug: "VS-Code-Plugins",
  },
  {
    title: "2021",
    slug: "2021",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage links={files} />,
  },
  {
    path: "/:slug",
    element: <Post />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
