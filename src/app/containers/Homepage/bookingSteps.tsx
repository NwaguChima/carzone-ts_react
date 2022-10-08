import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
    `}
`;

const Title = styled.h2`
  ${tw`
        text-xl
        lg:text-3xl
        text-black
        font-extrabold
    `}
`;

export function BookingSteps() {}
