import {
  HeaderContainer,
  LogoBackgroundContainer,
  LogoContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  RightSection,
  UserInfo,
} from "./Header.styled";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, IconButton } from "@mui/material";

function Header() {
  return (
    <HeaderContainer>
      <LogoBackgroundContainer>
        <LogoContainer>Impekable</LogoContainer>
      </LogoBackgroundContainer>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search transactions, invoices or help"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <RightSection>
        <IconButton><LanguageIcon /></IconButton>
        <IconButton><ChatBubbleOutlineIcon /></IconButton>
        <IconButton><NotificationsNoneIcon /></IconButton>
        <UserInfo>
          <span>John Doe</span>
          <Avatar src="/avatar.jpg" sx={{ width: 32, height: 32 }} />
        </UserInfo>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;