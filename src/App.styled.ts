import { styled } from "@mui/material/styles";
import { colors } from "./theme/colors";

export const MainContainer = styled("main")(() => ({
  display: "flex",
  flex: 1,
  minHeight: 0,
  backgroundColor: "#F0F0F7",
}));

export const CalendarSectionContainer = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: 0,
  padding: "24px 32px 32px",
  minWidth: 0,
}));

export const CalendarCard = styled("div")(() => ({
  backgroundColor: colors.surface,
  borderRadius: 4,
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
  padding: "24px 28px 32px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
}));

export const PageTitle = styled("h1")(() => ({
  fontWeight: 400,
  fontSize: "22px",
  color: colors.slate,
  marginBottom: "20px",
}));
