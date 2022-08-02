import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const ModalOuterBox = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 60%;
  height: 90%;
  overflow: auto;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 10px 40px 40px 40px;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
  display: none;
}
`

const TitleNumber = styled.div`
  font-size: 2vh;
  font-family: sans-serif;
  margin-bottom: 2vh;
`
const Title = styled.div`
  font-weight: 800;
  font-size: 3.5vh;
`
const Writer = styled.div`
  font-size: 2vh;
  text-align: end;
  align-items: center;
  font-family: sans-serif;
`
const Body = styled.div`
  
`
const CommentsNum = styled(Writer)`
  color: grey;
`
const CommentBox = styled.div`
  margin-bottom: 2vh;
`
const CommentName = styled.div`
  font-size: 2vh;
  font-weight: 700;
`
const CommentBody = styled(CommentName)`
  font-weight: 500;
  color: grey;
  margin-top: 1vh;
`

const Modal = ({ contents, handleModal }) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${contents.id}/comments`)
        // console.log("data", response.data);
        setComments(response.data);
        // console.log("comments", comments);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
    <ModalOuterBox>
      <ModalInner>
        <Loading />
      </ModalInner>
    </ModalOuterBox>)
  }

  if (!comments) {
    return null;
  }

  return (
    <ModalOuterBox>
      <ModalInner>
        <div style={{textAlign : "end", cursor: "pointer"}} onClick={handleModal} >&times;</div>
        <hr style={{
          height: "1px",
          backgroundColor: "#fff",
          border: "none"
        }} />
        <TitleNumber>{contents.id} 번 게시물</TitleNumber>
        <Title>{contents.title}</Title>
        <Writer>작성자 {contents.userId}</Writer>
        <hr style={{margin: "30px 0px 30px 0px"}} />
        <Body>{contents.body}</Body>
        <CommentsNum>댓글 {comments.length}</CommentsNum>
        <hr style={{margin: "30px 0px 30px 0px"}} />
        {comments.map((comment) => 
          <CommentBox key={comment.id}>
            <CommentName>{comment.name}</CommentName>
            <CommentBody>{comment.body}</CommentBody>
            <hr style={{
              height: "1px",
              backgroundColor: "#ccc",
              border: "none",
              margin: "2vh 0 2vh 0"
            }} />
          </CommentBox>
        )}
      </ModalInner>
    </ModalOuterBox>
  );
};

export default Modal;