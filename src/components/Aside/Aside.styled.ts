import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { colors } from "../../theme/colors";

export const AsideContainer = styled("aside")(() => ({
  backgroundColor: colors.slate,
  width: "260px",
  color: colors.surface,
  display: "flex",
  flexDirection: "column",
  fontSize: "15px",
  flexShrink: 0,
}));

export const NavList = styled(List)(() => ({
  width: 250,
  backgroundColor: colors.slate,
  color: colors.surface,
  minHeight: "calc(100vh - 70px)",
  paddingTop: 8,
  paddingLeft: 12,
  paddingRight: 12,
}));

export const ListItemContainer = styled("div")(() => ({
  marginBottom: 2,
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 4,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 12,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "#36364d",
  },
}));

export const NavIconSlot = styled("div")(() => ({
  minWidth: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledNavIcon = styled("span")(() => ({
  display: "flex",
  color: "#A5A4BF",
  "& svg": {
    fontSize: 22,
  },
}));

export const NavItemLabel = styled("span")(() => ({
  fontSize: "15px",
  letterSpacing: "0.2px",
  flex: 1,
  textAlign: "left",
}));
