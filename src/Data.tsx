import React, { useState } from "react";
import { chineseToEnglish } from "./data1";
import styled from "styled-components";
import { Button as MaterialUiButton, Card } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// sticky colors: #ff7eb9,#ff65a3,#7afcff,#feff9c,#fff740

export const FlipCardAndButtonsContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
height: 40rem;
width: 50%;
`

export const CardContainer = styled.div`
height: 20rem;
background-color: #feff9c;
display: flex;
flex-direction: column;
padding: 2rem;
border-radius: 1rem;
justify-content: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem
`

export const CardTitle = styled.p`
justify-self: center;
align-self: center;
`

export const CardContent = styled.h1`
flex-grow:2;

`


export const TextSection = styled.div`
 padding: 2rem;  
display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
`

export const Button = styled(MaterialUiButton)`
  flex-grow: 2
`

export const CardFront = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
 flex-grow:1;

`

export const SideLabel = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
flex-grow:1;

`

export const Explanation = styled.h1`
  flex-grow: 2;
  padding: 2rem;
  text-align: center;
  overflow: scroll;
`

const initialState: number = chineseToEnglish[0].key - 1;

export const Data: () => JSX.Element = () => {
  const [counter, setCounter] = useState(initialState);
  const [front, setFront] = useState(true)
  // display the data with the key of card state
  return (
    <FlipCardAndButtonsContainer>
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
          <>
            <SideLabel>
              Front
           </SideLabel>
            <CardFront>
              <CardTitle>
                Hanzi:
            </CardTitle>
              <CardContent>
                {chineseToEnglish[counter].hanzi}
              </CardContent>
              <CardTitle>
                Pinyin:
              </CardTitle>
              <CardContent>
                {chineseToEnglish[counter].pinyin}
              </CardContent>
            </CardFront></>
          :
          <>
            <SideLabel>
              Back
           </SideLabel>
            <Explanation>
              {chineseToEnglish[counter].meaning}
            </Explanation>
          </>
        }
      </CardContainer>
    </FlipCardAndButtonsContainer>
  );
};
