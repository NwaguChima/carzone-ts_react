import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3rem;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pr-9
        md:pl-9
    `}
`;

const ItemContainer = styled.div`
  ${tw`
        flex
        items-center
        relative
`}
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
        whitespace-nowrap
`}
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-300
        fill-current
        text-xs
        md:text-base
        ml-1
  `}
`;

const Name = styled.span`
  ${tw`
        text-gray-400
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: 280px;
  user-select: none;
  top: 5.8em;
  left: 0;
  border-radius: 5px;
  font-size: 10px;
  border: none;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

  ${({ offset }: any) =>
    offset &&
    css`
      left: -8em;
      top: 5em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 4.5em;
    left: -2em;
    max-width: none;
    font-size: 16px;
  }
` as any;

const BtnWrapper = styled.div`
  ${tw`
    sm:ml-4
    md:ml-8
  `}
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up</Name>
        <SmallIcon>
          {isStartCalendarOpen ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return</Name>
        <SmallIcon>
          {isReturnCalendarOpen ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <BtnWrapper>
        <Button text="Book Your Ride" />
      </BtnWrapper>
    </CardContainer>
  );
}
