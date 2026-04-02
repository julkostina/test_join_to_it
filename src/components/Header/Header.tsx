import {
  HeaderContainer,
  LogoBackgroundContainer,
  LogoContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  RightSection,
  HeaderIconButton,
  NotificationButtonWrap,
  UserInfo,
  UserName,
  StyledUserAvatar,
  ChevronWrap,
} from "./Header.styled";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  return (
    <HeaderContainer>
      <LogoBackgroundContainer>
        <LogoContainer>IMPEKABLE</LogoContainer>
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
        <HeaderIconButton aria-label="Language">
          <LanguageIcon />
        </HeaderIconButton>
        <HeaderIconButton aria-label="Chat">
          <ChatBubbleOutlineIcon />
        </HeaderIconButton>
        <NotificationButtonWrap>
          <HeaderIconButton aria-label="Notifications">
            <NotificationsNoneIcon />
          </HeaderIconButton>
        </NotificationButtonWrap>
        <UserInfo>
          <UserName>John Doe</UserName>
          <ChevronWrap>
            <KeyboardArrowDownIcon />
          </ChevronWrap>
          <StyledUserAvatar src="/avatar.jpg" alt="" />
        </UserInfo>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;
