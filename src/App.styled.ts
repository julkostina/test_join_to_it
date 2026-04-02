import { styled } from "@mui/material/styles";

export const MainContainer = styled("main")(()=>({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor:"#F0F0F7"

}))

export const CalendarSectionContainer = styled("div")(()=>({
    display: "flex",
    flexDirection:"column",
    width: "80%"
}))

export const H2Container = styled("h2")(()=>({
    fontWeight:"400"
}))