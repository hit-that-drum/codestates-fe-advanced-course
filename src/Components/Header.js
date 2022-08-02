import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  margin: 0 auto 5vh 0;
  padding: 2vh;
  font-size: 7vh;
  font-weight: 1000;
  text-align: center;
  color: white;
  background-color: #33CCFF;
  text-shadow: 6px 5px 0px rgba(0,0,0,0.15);
`

const Header = () => {
  return (
    <HeaderBox>
      BOARD
    </HeaderBox>
  );
};

export default Header;