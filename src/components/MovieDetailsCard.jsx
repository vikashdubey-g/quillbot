import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DashboardContext } from "../App";

const MovieDetailsCard = () => {
  const { movieDetails } = useContext(DashboardContext);
  const { Title, Year, imdbRating, Director, Runtime, Language, Plot, Poster } =
    movieDetails;

  return (
    <Card sx={{ p: 0, pr: 2, flexDirection: "row", columnGap: 6, mt: 4 }}>
      <Box
        sx={{ height: "389px", width: "300px", objectFit: "contain" }}
        component="img"
        alt="movie details"
        src={Poster}
      />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="heading">{Title}</Typography>
        </Grid>
        <Grid item xs={4} mt={1}>
          <LinearProgress
            variant="determinate"
            color="primary"
            value={+imdbRating * 10}
          />
          <span>{imdbRating}/10</span>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={3}>
          <Typography variant="label">Year:</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="label">{Year}</Typography>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={3}>
          <Typography variant="label">Running Time:</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="label">{Runtime}</Typography>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={3}>
          <Typography variant="label">Directed by:</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="label">{Director}</Typography>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={3}>
          <Typography variant="label">language:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="label">{Language}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">{Plot}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary">
            Play Movie
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" color="primary">
            Watch Trailer
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieDetailsCard;
