import { useId } from "react";
import {
  ColorPickerRoot,
  ColorPickerLabel,
  ColorPickerInput,
  ColorPickerHex,
} from "./ColorPicker.styled";

type ColorPickerProps = {
  value: string;
  onChange: (color: string) => void;
  label?: string;
};

export default function ColorPicker({
  value,
  onChange,
  label = "Color",
}: ColorPickerProps) {
  const inputId = useId();

  return (
    <ColorPickerRoot>
      <ColorPickerLabel htmlFor={inputId}>{label}</ColorPickerLabel>
      <ColorPickerInput
        id={inputId}
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
      <ColorPickerHex>{value.toUpperCase()}</ColorPickerHex>
    </ColorPickerRoot>
  );
}
