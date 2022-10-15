import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col    
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `}

  & > a {
    ${tw`
        text-sm
        text-white
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
        font-bold
        text-base
        text-white
        mb-3
    `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Carzone is the largest online car marketplace in the Middle East,
            connecting buyers and sellers with a wide variety of new and used
            cars. With over 1 million cars listed, YourCar is the largest online
            marketplace for buying and selling cars in the Middle East.
          </AboutText>
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
