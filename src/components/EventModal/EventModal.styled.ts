import { styled } from "@mui/material/styles";
import { colors } from "../../theme/colors";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const EventPopover = styled(Popover)(() => ({
  "& .MuiPopover-paper": {
    marginTop: 10,
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "visible",
    maxWidth: "none",
  },
}));

export const EventPopoverSurface = styled("div")(() => ({
  position: "relative",
  backgroundColor: colors.surface,
  borderRadius: 8,
  boxShadow: "0px 4px 24px rgba(67, 66, 93, 0.15)",
  padding: "24px 20px 16px",
  minWidth: 320,
  maxWidth: 360,
  "&::before": {
    content: '""',
    position: "absolute",
    top: -8,
    left: "50%",
    marginLeft: -8,
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: `8px solid ${colors.surface}`,
  },
}));

export const EventPopoverClose = styled(IconButton)(() => ({
  position: "absolute",
  top: 4,
  right: 4,
  color: colors.textMuted,
}));

export const EventFormFields = styled(Stack)(() => ({
  marginTop: 4,
  paddingRight: 8,
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
  },
  "& .MuiInputBase-input::placeholder": {
    color: colors.textMuted,
    opacity: 1,
  },
}));

export const AdornmentIconWrap = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  color: colors.textMuted,
  "& svg": {
    fontSize: 20,
  },
}));

export const EventPopoverFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 24,
}));

export const EventFooterActions = styled("span")(() => ({
  display: "flex",
  gap: 16,
  alignItems: "center",
}));

export const EventCancelTextButton = styled(Button)(() => ({
  textTransform: "none",
  fontSize: "14px",
  color: "#E02020",
  minWidth: "auto",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#C01818",
  },
}));

export const EventSaveTextButton = styled(Button)(() => ({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 600,
  color: colors.slate,
  minWidth: "auto",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    color: colors.accentBlue,
  },
}));
