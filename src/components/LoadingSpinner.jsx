import React from "react";
import Loading from "../assets/Loading.gif";
import InterWind from "../assets/InterWind.gif";
import Ellipsis from "../assets/Ellipsis.gif";
import Spin from "../assets/Spin.gif";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5em;
`;

function LoadingSpinner() {
  return (
    <Container>
      <img src={Loading} alt="Loading" />
      <img src={InterWind} alt="InterWind" />
      <img src={Ellipsis} alt="Ellipsis" />
      <img src={Spin} alt="Spin" />
    </Container>
  );
}

export default LoadingSpinner;
