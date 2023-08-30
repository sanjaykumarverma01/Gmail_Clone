import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} cursor="pointer" />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchRapper>
          <Search color="action" />
          <InputBase placeholder="Search mail" />
          <Tune color="action" />
        </SearchRapper>

        <IconsWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </IconsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchRapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const IconsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  gap: 20,
});
