// import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-xl">React Router Project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
