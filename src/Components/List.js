import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Contents from './Contents';
import Header from './Header';
import axios from "axios";
import Loading from './Loading';

const OuterBox = styled.div`
  margin: 5vh;
`
const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  width: 80%;
  height: 100%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`

const List = () => {
  const [contents, setContents] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log("data", response.data);
        // console.log("userId", response.data[0].userId);
        // console.log("title", response.data[0].title);
        setContents(response.data);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />
  }

  if (!contents) {
    return null;
  }

  return (
    <>
      <Header />
      <OuterBox>
        <ListBlock>
          {contents.map((content) => 
            <Contents key={content.id} contents={content} />
          )}
        </ListBlock>
      </OuterBox>
    </>
  );
};

export default List;