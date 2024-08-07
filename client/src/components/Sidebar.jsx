import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PodcastsRoundedIcon from '@mui/icons-material/PodcastsRounded';
import{ Link} from "react-router-dom";


const MenuContainer = styled.div`
    flex:0.5;
    width:100%;
    flex-direction:column;
    height:100vh;
    display:flex;
    background-color:${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    @media(max-width:1100px){
    position:fixed;
    z-index:1000;
    width:100%;
    max-width:250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition:0.3s ease-in-out;
  }`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    font-size: 24px;
    margin: 16px 0px;
    padding: 0px 16px;
  `;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;

const Close = styled.div`
  display: none;
  padding: 0px 12px;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration:none;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary+50};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
  text-decoration:none;
`;

const HR = styled.div`
  width:100%;
  height:1px;
  background-color: ${({ theme }) => theme.text_secondary+50};
  margin:10px 0px;
`;


const menuItems = [
  {
    link: "/",
    name: "Dashboard",
    icon:<HomeRoundedIcon/>
  },
  {
    link: "/search",
    name: "Search",
    icon:< TroubleshootRoundedIcon />
  },
  {
    link: "/favourites",
    name: "Favourites",
    icon:<FavoriteBorderRoundedIcon/>
  },
]



const Sidebar = ({
  menuOpen,
  setMenuOpen ,
  setDarkMode ,
  darkMode})=>{
    const buttons = [
      {
        fun: () => console.log("upload"),
        name: "Upload",
        icon:<FileUploadRoundedIcon/>
      },
      {
        fun: () => setDarkMode(!darkMode),
        name:darkMode? "Light Mode":"Dark Mode",
        icon:darkMode? <LightModeRoundedIcon/>:<DarkModeRoundedIcon/>
      },
      {
        fun: () => console.log("logout"),
        name: "LogOut",
        icon:<LogoutRoundedIcon/>
      },
    ]
    return (
      <MenuContainer menuOpen = {menuOpen}>
      <Flex>
        <Logo>
          <PodcastsRoundedIcon fontSize="large"/>
          VibeCast
        </Logo>
        <Close >
          <CloseRoundedIcon onClick={() => setMenuOpen(false)} style={{ cursor: "pointer" }}/>
        </Close>
      </Flex>
      {
      menuItems.map((item) => (

      <Link to = {item.link} style ={{textDecoration:"none"}}>
      <Elements>
        {item.icon}
        <NavText>{item.name}</NavText>
      </Elements>
      </Link>
      ))
      }

      <HR/>
      
      {
      buttons.map((item) => (

      
      <Elements onClick = {item.fun}>
        {item.icon}
        <NavText>{item.name}</NavText>
      </Elements>
      
      ))
      }
    </MenuContainer>
  );
}

export default Sidebar;