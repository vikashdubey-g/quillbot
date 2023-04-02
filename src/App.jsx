import { createContext, useState, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Home from "./pages/Home";
import { theme } from "./theme/theme";
import { MovieData } from "./data/movieData";
import "./index.css";

// context
export const DashboardContext = createContext();

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [movieDetails, setMovieDetails] = useState({});

  // filtering the userlist depends upon the user name enter in the searchbar
  const updateMovieList = () => {
    const filterCountList = MovieData?.filter(({ Title }) => {
      return Title.toLowerCase().includes(searchItem);
    });
    setMovieList(filterCountList);
  };

  useEffect(() => {
    updateMovieList();
  }, [searchItem]);

  const data = {
    movieList,
    searchItem,
    setSearchItem,
    movieDetails,
    setMovieDetails,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardContext.Provider value={data}>
        <Home />
      </DashboardContext.Provider>
    </ThemeProvider>
  );
};

export default App;
