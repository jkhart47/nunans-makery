import styled from 'styled-components';
import { TeaserContainer, TextContainer } from '../components/Teaser/styles';
import { Title } from "../components/Title/title.module";
import { Description } from '../components/Description/description';
import Image from "next/image";
import bags from "../public/bagsforcarousel.png";

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 500px;
  gap: 20px;
  margin-top: 100px;
  align-items: center;
`;

export default function Home() {
  return (
   
    <TeaserContainer>
      <Image alt="bags4carousel" src={bags} layout="intrinsic"/>
      <TextContainer>
        <Title>Custom Made Collections</Title>
        <Description>
          Adventures in upcycling and creativity ;
        </Description>
      </TextContainer>
    </TeaserContainer>
  
  );


}