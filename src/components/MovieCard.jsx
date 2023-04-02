import React, { useContext, useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { colors } from "../theme/colors";
import { DashboardContext } from "../App";
import { MovieData } from "../data/movieData";

const MovieCard = ({ itemInd, movieData }) => {
  const { setMovieDetails } = useContext(DashboardContext);
  const [isSelectedCard, setIsSelectedCard] = useState([]);

  const { Title, Poster } = movieData;

  const cardSelected = (arr, i) => {
    const res = arr?.map((item, ind) => {
      return {
        cards: ind === i ? true : false,
      };
    });
    return res;
  };

  const handleCard = (i) => {
    setMovieDetails(movieData);
    const res = cardSelected(isSelectedCard, i);
    const cloneCardRes = [...res];
    setIsSelectedCard(cloneCardRes);
  };

  useEffect(() => {
    const res = Array.from(Array(MovieData.length).keys());
    setIsSelectedCard(
      res?.map((item) => {
        return {
          cards: false,
        };
      })
    );
  }, []);

  return (
    <Card
      sx={{
        bgcolor: colors.cardBg,
        p: 1,
        borderRadius: 2,
        display: "flex",
        alignItems: "flex-start",
        objectFit: "contain",
        cursor: "pointer",
        border: isSelectedCard[itemInd]?.cards
          ? `2px solid ${colors.blue}`
          : "none",
      }}
      onClick={() => handleCard(itemInd)}
    >
      <Box
        component="img"
        src={Poster}
        sx={{ height: 188, width: 170, borderRadius: 2 }}
      />
      <Typography>{Title}</Typography>
      <Box
        sx={{
          display: "flex",
          columnGap: 2,
          alignItems: "flex-start",
        }}
      >
        <PlayCircleOutlineIcon sx={{ color: colors.body1 }} />
        <ControlPointIcon sx={{ color: colors.body1 }} />
      </Box>
    </Card>
  );
};

export default MovieCard;
