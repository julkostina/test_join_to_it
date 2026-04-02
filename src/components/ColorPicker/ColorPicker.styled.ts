import { styled } from "@mui/material/styles";
import { colors } from "../../theme/colors";

export const ColorPickerRoot = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  flexWrap: "wrap",
}));

export const ColorPickerLabel = styled("label")(() => ({
  minWidth: 72,
  fontSize: "14px",
  color: colors.slate,
}));

export const ColorPickerInput = styled("input")(() => ({
  width: 48,
  height: 32,
  padding: 0,
  border: `1px solid ${colors.border}`,
  borderRadius: 4,
  cursor: "pointer",
  backgroundColor: "transparent",
}));

export const ColorPickerHex = styled("span")(() => ({
  fontSize: "14px",
  color: colors.textMuted,
}));
