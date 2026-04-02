import { styled } from "@mui/material/styles";

export const AsideContainer = styled("aside")(() => ({
    backgroundColor: "#43425D",
    width:"260px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    fontSize: "15px",
}));
export const ListItemContainer = styled("div")(()=>({
    "& .MuiListItemButton-root:hover":{
        backgroundColor:"#36364d" 
    }
}))
