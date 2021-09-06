import React, { useState } from "react";
import { chineseToEnglish } from "./data1";
import styled from "styled-components";
import { Button as MaterialUiButton, Card } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const CardContainer = styled.div`
height: 20rem;
background-color: #edf1f5;
display: flex;
flex-direction: column;
padding: 4rem;
border-radius: 1rem;
justify-content: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem
`

export const CardTitle = styled.p`
`

export const CardContent = styled.h1``

export const CardContent2 = styled.h3``

export const TextSection = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center
`

export const Button = styled(MaterialUiButton)`
  flex-grow: 2
`

const initialState: number = chineseToEnglish[0].key - 1;

export const Data: () => JSX.Element = () => {
  const [counter, setCounter] = useState(initialState);
  const [front, setFront] = useState(true)
  // display the data with the key of card state
  return (
    <>
      <ButtonsContainer>
        <Button onClick={() => counter === 0 ? setCounter(0) : setCounter(counter + -1)}>
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={() => counter === chineseToEnglish.length ? setCounter(counter) : setCounter(counter + 1)}>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonsContainer>
      <CardContainer onClick={() => setFront(!front)}>
        {front === true ?
          <div>
            <TextSection>
              <CardTitle>
                Hanzi:
               </CardTitle>
              <CardContent>
                {chineseToEnglish[counter].hanzi}
              </CardContent>
            </TextSection>
            <TextSection>

              <CardTitle>
                Pinyin:
          </CardTitle>
              <CardContent>
                {chineseToEnglish[counter].pinyin}
              </CardContent>
            </TextSection>
          </div>
          : <TextSection>
            <CardContent2>
              {chineseToEnglish[counter].meaning}
            </CardContent2>
          </TextSection>}
      </CardContainer>
    </>
  );
};
