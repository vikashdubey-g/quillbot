import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box, OutlinedInput } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DashboardContext } from "../App";

const Search = () => {
  const { searchItem, setSearchItem } = useContext(DashboardContext);
  const [isSearch, setIsSearch] = useState(true);

  const handleClose = () => {
    setIsSearch((prev) => !prev);
    setSearchItem("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isSearch ? (
        <SearchIcon
          fontSize="large"
          onClick={() => setIsSearch((prev) => !prev)}
        />
      ) : (
        <OutlinedInput
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search by Title..."
          startAdornment={<SearchIcon fontSize="large" />}
          endAdornment={<CloseIcon onClick={handleClose} />}
        />
      )}
      <Box>
        <LightModeIcon />
        <MoreVertIcon sx={{ ml: 1 }} />
      </Box>
    </Box>
  );
};

export default Search;
