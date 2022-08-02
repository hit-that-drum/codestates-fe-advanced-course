import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  width: 100%;
  height: 70px;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;


  :hover{
    background-color: #CCE5FF
  }


  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  span {
    &:nth-child(1) {
      margin: auto;
      text-align: center;
      width: 10%;
      flex-grow: 1;
      font-weight: 600;
    }
    &:nth-child(2) {
      margin: auto;
      width: 75%;
      flex-grow: 2;
    }
    &:nth-child(3) {
      margin: auto;
      width: 15%;
      flex-grow: 1;
      text-align: center;
    }
}
`

const Contents = ({ contents }) => {
  const { body, id, title, userId } = contents;
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  }

  return (
    <div>
      {modal === true ?
      <div>
        <ListItem>
          {<span>{id}</span>}
          {<span>{title}</span>}
          {<span>작성자 {userId}</span>}
        </ListItem>
        <Modal contents={contents} handleModal={handleModal} />
      </div>
      :
      <ListItem onClick={handleModal}>
        {<span>{id}</span>}
        {<span>{title}</span>}
        {<span>작성자 {userId}</span>}
      </ListItem>
      }
    </div>

  );
};

export default Contents;