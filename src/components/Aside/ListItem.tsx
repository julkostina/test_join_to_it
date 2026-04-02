import {
  ListItemContainer,
  StyledListItemButton,
  NavIconSlot,
  StyledNavIcon,
  NavItemLabel,
} from "./Aside.styled";
import type { NavItemProps } from "../../types/events";


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
