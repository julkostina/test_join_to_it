import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ElementType } from "react";
import { ListItemContainer } from "./Aside.styled";

interface NavItemProps {
  label: string;
  icon: ElementType;
}

export default function ListItem({ label, icon: Icon }: NavItemProps) {
  return (
    <ListItemContainer>
      <ListItemButton>
        <ListItemIcon>
          <Icon sx={{ color: "#A5A4BF" }} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItemContainer>
  );
}
