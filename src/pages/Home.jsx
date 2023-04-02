import { Box, Grid } from "@mui/material";
import { map } from "lodash";
import React, { useContext } from "react";

import { DashboardContext } from "../App";
import MovieCard from "../components/MovieCard";
import MovieDetailsCard from "../components/MovieDetailsCard";
import Search from "../components/Search";
import Sidebar, { drawerWidth } from "../components/Sidebar";
import { colors } from "../theme/colors";

const Home = () => {
  const { movieList, movieDetails } = useContext(DashboardContext);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          bgcolor: colors.mainBgColor,
          minHeight: "100vh",
          flexGrow: 1,
          p: 3,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Search />
        {Object.keys(movieDetails).length !== 0 && <MovieDetailsCard />}
        <Grid container spacing={2} mt={1}>
          {map(movieList, (movieData, ind) => (
            <Grid item xs={2}>
              <MovieCard key={ind} itemInd={ind} movieData={movieData} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
