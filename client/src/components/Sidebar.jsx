import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PodcastsRoundedIcon from '@mui/icons-material/PodcastsRounded';
import{ Link} from "react-router-dom";

const MenuContainer = styled.div`
    flex:0.3;
    flex-direction:column;
    height:100vh;
    display:flex;
    background-color:${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    @media(max-width:1024px){
    position:fixed;
    z-index:1000;
    width:100%;
    max-width:250px;
    left:${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100")}
    transition:0.3s ease-in-out;
  }`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 24px;
  margin: 16px 0px;
`;

const Close = styled.div`
  display: none;
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
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
`;

function Sidebar() {
  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <PodcastsRoundedIcon fontSize="large"/>
          VibeCast</Logo>
        <Close>
          <CloseRoundedIcon />
        </Close>
      </Flex>
      <Link to = "/">
      <Elements>
        <HomeRoundedIcon />
        <NavText>DashBoard</NavText>
      </Elements>
      </Link>
      
    </MenuContainer>
  );
}

export default Sidebar;
