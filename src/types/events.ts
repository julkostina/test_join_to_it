import type { ElementType } from "react";
export interface Event {
    id: string;
    title: string;
    start: string;
    end: string;
    color: string;
    notes?: string;
}
export interface NavItemProps {
    label: string;
    icon: ElementType;
  }
  export type ColorPickerProps = {
    value: string;
    onChange: (color: string) => void;
    label?: string;
  };
  export type EventModalProps = {
    open: boolean;
    anchorEl: HTMLElement | null;
    draft: Event | null;
    onClose: () => void;
    onSave: (event: Event) => void;
  };