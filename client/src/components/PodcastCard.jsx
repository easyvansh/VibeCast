// import { Card } from '@mui/material'
import React, { useState } from "react";
import styled from "styled-components";
import { HeadphonesRounded, PlayArrowRounded } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;

`;

const Card = styled(Link)`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
  &:hover ${PlayIcon} {
  transition: all 0.4s ease-in-out;
    display: flex;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const CardImage = styled.img`
  object-fit: cover;
  width: 230px;
  height: 150px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 2px;
`;

const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;
const TimePosted = styled.div`
  color: ${({ theme }) => theme.text_secondary};
`;

const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;
const PodcastCard = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <Card>
      <Top>
        <Link>
          <Favorite>
            {favourite ? (
              <FavoriteIcon
                style={{ color: "#E30022", width: "16px", height: "16px" }}
              ></FavoriteIcon>
            ) : (
              <FavoriteIcon
                style={{ width: "16px", height: "16px" }}
              ></FavoriteIcon>
            )}
          </Favorite>
        </Link>
        <CardImage src = "https://cdn3.vectorstock.com/i/1000x1000/45/47/logo-or-icon-podcast-with-wave-on-dark-background-vector-25814547.jpg"/>
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>The Lex Friedman Podcast</Title>
          <Description>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adip null Lorem ipsum dolor
            sit amet, consectetur adip null Lorem ipsum dolor sit amet,
            consectetur adip null Lorem ipsum dolor sit amet, consectetur adip
            null
          </Description>
          <CreatorInfo>
            <Avatar style={{ width: "26px", height: "26px" }}></Avatar>

            <CreatorName>Lex Friedman</CreatorName>
          <Views>• 12 Views</Views>
          </CreatorInfo>
        </MainInfo>
      </CardInformation>
      <PlayIcon>
      {"video" === 'video' ?
          <PlayArrowRounded style={{ width: '28px', height: '28px' }} />
        :
          <HeadphonesRounded style={{ width: '28px', height: '28px' }} />
        }
       
       
      </PlayIcon>
    </Card>
  );
};

export default PodcastCard;
