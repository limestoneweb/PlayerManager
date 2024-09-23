// App.js
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthContext";
import Main from "./components/Layout/Main";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Players from "./components/Players/Players";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";
import "./i18n";
import { useDispatch } from "react-redux";
import { getCategory } from "./actions/menu";
import { getPlayer } from "./actions/players";

/**
 * The main application component that sets up routing and global state.
 *
 * @function App
 * @returns {JSX.Element} The rendered application component.
 *
 * @example
 * <App />
 */
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayer());
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <AuthProvider>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/players/:category,:subCategory"
            element={<Players />}
          />
          <Route exact path="/players/listPlayers" element={<Players />} />
          <Route exact path="/players/search" element={<Players />} />
          <Route exact path="/players/:id" element={<PlayerDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
    </AuthProvider>
  );
}

export default App;
