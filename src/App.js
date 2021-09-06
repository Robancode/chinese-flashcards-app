import { Data } from "./Data";
import "@fontsource/roboto";
import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

export const StyledHeader = styled.h1`
  padding-bottom: 2rem;
`;

function App() {
  return (
    <StyledApp>
      <StyledHeader>Flashcards</StyledHeader>
      <Data />
    </StyledApp>
  );
}

export default App;
