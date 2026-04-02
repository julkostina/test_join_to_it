import { styled } from "@mui/material/styles";

export const CalendarViewWrapper = styled("div")(() => ({
  height: "900px",
  overflowY: "hidden",
  color: "#43425D",
  "& .fc .fc-button": {
    backgroundColor: "transparent",
    borderColor: "#D7DAE2 !important",
    color: "#43425D",
  },
  ".fc.fc-media-screen.fc-direction-ltr.fc-theme-standard":{
    width:"1130px",
    maxHeight:"800px",
  },
  ".fc-scroller.fc-scroller-liquid-absolute":{
    overflowY:"hidden !important"

  },
  ".fc-daygrid-day-frame.fc-scrollgrid-sync-inner":{
    height:"135px"
  },
  margin:"0 auto",
  "& .fc .fc-button-active": {
    backgroundColor: `transparent !important`,
    color: "#3B86FF !important",
  },
  "& th .fc-scrollgrid-sync-inner":{
    backgroundColor: "#F5F6FA",
    color: "#A3A6B4",
    padding:"14px 0",
    fontSize:"11px"
  },

  "h2":{
        fontWeight:"400"
  },
  "& .fc .fc-button:focus": {
    boxShadow: "none",
  },
}));


