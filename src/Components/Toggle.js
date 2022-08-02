import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import styled from 'styled-components';

const ToggleBox = styled.div`
  text-align: center;
  padding-top: 5vh;
  padding-right: 3vh;
`

const Toggle = ({ setIsDarkMode, isDarkMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <ToggleBox>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </ToggleBox>
    </div>
  );
};

export default Toggle;