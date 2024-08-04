import React from 'react'
import PodcastCard from "../components/PodcastCard";
import styled from 'styled-components';


const Container = styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
`
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavouritesContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
padding: 18px 6px;
@media (max-width: 550px){
  justify-content: center;
}
`
const DisplayNo = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
color: ${({ theme }) => theme.text_primary};
`


const Favourites = () => {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouritesContainer>
      <DisplayNo>No Favourites</DisplayNo>
        {/* <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/>
        <PodcastCard/> */}
      </FavouritesContainer>
    </Container>
  )
}

export default Favourites