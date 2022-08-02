import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Contents from './Contents';
import Header from './Header';
import axios from "axios";
import Loading from './Loading';

import Pagination from './Pagination';


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
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  
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
          {contents.slice(offset, offset + limit).map((content) => 
            <Contents key={content.id} contents={content} />
          )}
        </ListBlock>
      </OuterBox>

      <footer>
        <Pagination
          total={contents.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
};

export default List;