import type { ElementType } from "react";
import {
  ListItemContainer,
  StyledListItemButton,
  NavIconSlot,
  StyledNavIcon,
  NavItemLabel,
} from "./Aside.styled";

interface NavItemProps {
  label: string;
  icon: ElementType;
}

export default function ListItem({ label, icon: Icon }: NavItemProps) {
  return (
    <ListItemContainer>
      <StyledListItemButton>
        <NavIconSlot>
          <StyledNavIcon>
            <Icon />
          </StyledNavIcon>
        </NavIconSlot>
        <NavItemLabel>{label}</NavItemLabel>
      </StyledListItemButton>
    </ListItemContainer>
  );
}
