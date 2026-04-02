import { styled } from "@mui/material/styles";
import { colors } from "../../theme/colors";

export const CalendarViewWrapper = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  minWidth: 0,
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  color: colors.slate,
  "& .fc": {
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
  },
  "& .fc-view-harness": {
    flex: 1,
    minHeight: 0,
  },
  "& .fc-scroller-harness-liquid": {
    flex: 1,
    minHeight: 0,
  },
  "& .fc .fc-button": {
    backgroundColor: "transparent",
    borderColor: `${colors.border} !important`,
    color: colors.slate,
  },
  "& .fc .fc-button-active": {
    backgroundColor: "#E8EEF8 !important",
    borderColor: `${colors.border} !important`,
    color: `${colors.accentBlue} !important`,
  },
  "& .fc .fc-button:focus": {
    boxShadow: "none",
  },
  ".fc.fc-media-screen.fc-direction-ltr.fc-theme-standard": {
    width: "100% !important",
    maxWidth: "100%",
    flex: 1,
    minHeight: 0,
  },
  "& .fc-scrollgrid, & .fc-scrollgrid-sync-table": {
    width: "100% !important",
  },
  ".fc-scroller.fc-scroller-liquid-absolute": {
    overflowY: "auto !important",
  },
  "& th .fc-scrollgrid-sync-inner": {
    backgroundColor: "#F5F6FA",
    color: colors.textMuted,
    padding: "14px 0",
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  "& .fc-daygrid-day-number": {
    color: colors.textMuted,
    padding: "6px 10px",
    fontSize: "13px",
  },
  "& .fc-daygrid-day.fc-day-today": {
    backgroundColor: "rgba(59, 134, 255, 0.04)",
  },
  "& .fc-h-event, & .fc-v-event": {
    borderRadius: 4,
    borderWidth: 0,
    padding: "2px 6px",
    margin: "2px 4px",
  },
  "& .fc-event-main, & .fc-event-title": {
    color: colors.surface,
    fontSize: "12px",
    fontWeight: 500,
  },
  h2: {
    fontWeight: 400,
    fontSize: "18px",
    color: colors.slate,
    marginBottom: "16px",
    flexShrink: 0,
  },
}));
