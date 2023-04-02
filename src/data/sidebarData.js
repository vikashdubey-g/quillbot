import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import ListIcon from "@mui/icons-material/List";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const sidebarTopData = [
  { id: 0, label: "Discover", Icon: SearchIcon },
  { id: 1, label: "Playlist", Icon: PlaylistPlayIcon },
  { id: 2, label: "Movie", Icon: LiveTvIcon },
  { id: 3, label: "TV Shows", Icon: TvIcon },
  { id: 4, label: "My List", Icon: ListIcon },
];

const sidebarMiddleData = [
  { id: 0, label: "Watch Later", Icon: WatchLaterIcon },
  { id: 1, label: "Recomended", Icon: FavoriteBorderIcon },
];

const sidebarBottomData = [
  { id: 0, label: "Settings", Icon: SettingsIcon },
  { id: 1, label: "Logout", Icon: LogoutIcon },
];

export const sidebarData = [
  { id: 1, itemList: sidebarTopData },
  { id: 2, itemList: sidebarMiddleData },
  { id: 3, itemList: sidebarBottomData },
];
