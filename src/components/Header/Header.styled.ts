import { styled, alpha } from "@mui/material/styles";
import { colors } from "../../theme/colors";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

export const HeaderContainer = styled("header")(() => ({
  display: "flex",
  backgroundColor: colors.surface,
  fontSize: "13px",
  height: "70px",
  borderBottom: "1px solid #EBEDF5",
}));

export const LogoContainer = styled("h1")(() => ({
  fontSize: "15px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: colors.surface,
  fontWeight: 400,
}));

export const LogoBackgroundContainer = styled("div")(() => ({
  backgroundColor: "#363552",
  width: "260px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  alignSelf: "center",
  borderRadius: theme.shape.borderRadius,
  color: "#4D4F5C",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.06),
  },
  marginLeft: theme.spacing(2),
  width: "auto",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#4D4F5C",
  height: "100%",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#4D4F5C",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.25, 1, 1.25, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: "13px",
    width: "250px",
    "&::placeholder": {
      color: "#4D4F5C",
      opacity: 1,
    },
  },
}));

export const RightSection = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginLeft: "auto",
  paddingRight: "20px",
}));

export const HeaderIconButton = styled(IconButton)(() => ({
  color: colors.textMuted,
}));

export const NotificationButtonWrap = styled("span")(() => ({
  position: "relative",
  display: "inline-flex",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#FF9F43",
    border: `2px solid ${colors.surface}`,
  },
}));

export const UserInfo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  marginLeft: 8,
  paddingLeft: 12,
  borderLeft: "1px solid #EBEDF5",
}));

export const UserName = styled("span")(() => ({
  fontSize: "13px",
  color: "#4D4F5C",
}));

export const StyledUserAvatar = styled(Avatar)(() => ({
  width: 32,
  height: 32,
}));

export const ChevronWrap = styled("span")(() => ({
  display: "flex",
  color: colors.textMuted,
  marginLeft: 2,
  "& svg": {
    fontSize: 20,
  },
}));
