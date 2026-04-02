import { styled } from "@mui/material/styles";
import { colors } from "../../theme/colors";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const modalBorder = colors.slate;

export const EventPopover = styled(Popover)(() => ({
  "& .MuiPopover-paper": {
    marginTop: 12,
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "visible",
    maxWidth: "none",
  },
}));

export const EventPopoverSurface = styled("div")(() => ({
  position: "relative",
  backgroundColor: colors.surface,
  borderRadius: 10,
  border: `1px solid ${modalBorder}`,
  boxShadow: "0 8px 32px rgba(67, 66, 93, 0.12)",
  padding: "28px 24px 22px",
  minWidth: 300,
  maxWidth: 340,
  "&::before": {
    content: '""',
    position: "absolute",
    top: -10,
    left: "50%",
    marginLeft: -10,
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: `10px solid ${modalBorder}`,
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: -8,
    left: "50%",
    marginLeft: -9,
    width: 0,
    height: 0,
    borderLeft: "9px solid transparent",
    borderRight: "9px solid transparent",
    borderBottom: `9px solid ${colors.surface}`,
    zIndex: 1,
  },
}));

export const EventPopoverClose = styled(IconButton)(() => ({
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 2,
  color: colors.textMuted,
  backgroundColor: "rgba(245, 246, 250, 0.9)",
  padding: 6,
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "#EBEDF5",
  },
}));

export const EventFormFields = styled(Stack)(() => ({
  marginTop: 8,
  paddingRight: 4,
  paddingLeft: 2,
}));

export const EventFormTextField = styled(TextField)(() => ({
  "& .MuiInput-underline:before": {
    borderBottomColor: "#E8E9F0",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: colors.border,
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
    color: colors.slate,
    paddingTop: 4,
    paddingBottom: 6,
  },
  "& .MuiInputBase-input::placeholder": {
    color: colors.textMuted,
    opacity: 1,
  },
  "& .MuiInputBase-input[type='date']::-webkit-calendar-picker-indicator, & .MuiInputBase-input[type='time']::-webkit-calendar-picker-indicator":
    {
      display: "none",
    },
}));

export const AdornmentIconWrap = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  color: colors.textMuted,
  cursor: "pointer",
  "& svg": {
    fontSize: 20,
  },
}));

export const EventPopoverFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 28,
  paddingTop: 4,
}));

export const EventCancelTextButton = styled(Button)(() => ({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 500,
  color: "#E76F71",
  minWidth: "auto",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#D55A5C",
  },
}));

export const EventSaveTextButton = styled(Button)(() => ({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 600,
  color: colors.accentBlue,
  minWidth: "auto",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#2A6FD9",
  },
}));
