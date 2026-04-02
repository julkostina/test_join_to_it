import { AsideContainer } from "./Aside.styled.ts";
import { List } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItem from "./ListItem";
function Aside() {
  return (
    <AsideContainer>
      {" "}
      <List
        sx={{
          width: 250,
          backgroundColor: "#43425D",
          color: "#fff",
          height: "100vh",
        }}
      >
        <ListItem icon={HomeIcon} label="Home" />

        <ListItem icon={DashboardIcon} label="Dashboard" />

        <ListItem icon={MailOutlineIcon} label="Inbox" />

        <ListItem icon={Inventory2Icon} label="Products" />

        <ListItem icon={ReceiptLongIcon} label="Invoices" />

        <ListItem icon={PersonOutlineIcon} label="Customers" />

        <ListItem icon={ChatBubbleOutlineIcon} label="Chat Room" />

        <ListItem icon={CalendarTodayIcon} label="Calendar" />

        <ListItem icon={HelpOutlineIcon} label="Help Center" />

        <ListItem icon={SettingsIcon} label="Settings" />
      </List>
    </AsideContainer>
  );
}

export default Aside;
