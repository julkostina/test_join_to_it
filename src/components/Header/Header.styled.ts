import {styled, alpha} from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';

export const HeaderContainer = styled("header")(()=>({
    display:"flex",
    backgroundColor:"#FFFFFF",
    fontSize:"13px",
    height:"70px",
}))

export const LogoContainer = styled("h1")(()=>({
    fontSize:"15px",
    letterSpacing:"3px",
    textTransform:"uppercase",
    color: "#FFFFFF"
}))

export const LogoBackgroundContainer = styled("div")(()=>({
    backgroundColor:"#363552",
    width:"260px",
    display:"flex",
    alignItems:"center",
    paddingLeft:"20px"
    
}))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  alignSelf:"center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export const RightSection = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginLeft: "auto",
  paddingRight: "20px",
}));

export const UserInfo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  "& span": {
    fontSize: "13px",
    color: "#4D4F5C",
  },
}));