import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { map } from "lodash";
import { Fragment, useState } from "react";
import userIcon from ".././assets/user.svg";
import { sidebarData } from "../data/sidebarData";
import { colors } from "../theme/colors";

export const DrawerItems = () => {
  const [selectedLabel, setSelectedLabel] = useState("Discover");

  const handleSelectedLabel = (val) => {
    setSelectedLabel(val);
  };

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 5,
          pb: 3,
          rowGap: 2,
        }}
      >
        <Box
          component="img"
          sx={{ width: "91px", height: "91px", borderRadius: "50%" }}
          alt="userImage"
          src={userIcon}
        />

        <Typography textAlign="center" variant="body2">
          Eric Hoffman
        </Typography>
      </Toolbar>
      {map(sidebarData, ({ itemList, id }) => (
        <Fragment key={id}>
          <Divider />
          <List>
            {map(itemList, ({ label, Icon }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  sx={{
                    p: 0,
                    pl: 6,
                    borderRight:
                      label === selectedLabel ? `3px solid ${colors.blue}` : "",
                  }}
                  onClick={() => handleSelectedLabel(label)}
                >
                  <ListItemIcon>
                    <Icon
                      sx={{
                        color:
                          label === selectedLabel ? colors.blue : colors.body1,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      "&.MuiListItemText-root .MuiTypography-body1": {
                        color: label === selectedLabel ? colors.blue : colors.body1,
                      },
                    }}
                    primary={label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Fragment>
      ))}
    </>
  );
};
