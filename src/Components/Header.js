import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const HeaderOut = styled.div`
  display: flex;
  background-color: #33CCFF;
  align-items: center;
`

const HeaderBox = styled.div`
  margin: auto;
  padding: 2vh;
  font-size: 7vh;
  font-weight: 1000;
  text-align: center;
  color: white;
  background-color: #33CCFF;
  text-shadow: 6px 5px 0px rgba(0,0,0,0.15);
`

const HeaderBoxNight = styled(HeaderBox)`
  color: black;
`

const Header = ({ isDarkMode, setIsDarkMode }) => {

  return (
    <HeaderOut>
      {
        isDarkMode ?
        <HeaderBoxNight>
          BOARD
        </HeaderBoxNight>
        :
        <HeaderBox>
          BOARD
        </HeaderBox>
      }
      <Toggle setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    </HeaderOut>
  );
};

export default Header;