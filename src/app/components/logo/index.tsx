import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CartLogoImg from "../../../assets/images/car-logo.png";

interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
            text-xl
            md:text-2xl
            font-bold
            text-black
            m-1

            `}
  ${({ color }: ILogoProps) =>
    color === "white" ? tw`text-white` : tw`text-black`}
` as any;

const Image = styled.div`
  ${tw`
    h-6
    md:h-9
`}

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={CartLogoImg} alt="logo" />
      </Image>
      <LogoText color={color || "dark"}>CarZone.</LogoText>
    </LogoContainer>
  );
}
