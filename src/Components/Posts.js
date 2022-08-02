import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from './Pagination';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const [limit, setLimit] = useState(10);
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log("posts", posts)
        setPosts(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label> */}
      <main>
        {posts.slice(offset, offset + limit).map((post) => 
        <div key={posts.id}>
          <div>작성자 {post.userId}</div>
          <div>제목 {post.title}</div>
        </div>
        )}
      </main>
      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default Posts;