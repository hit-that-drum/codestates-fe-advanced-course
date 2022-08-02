import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import List from "./Components/List";


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))

// const dataCall = async () => {
//   try {
//     const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     console.log("data", data.data);
//     console.log("userId", data.data[0].userId);
//     console.log("title", data.data[0].title);
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// dataCall();



const Main = () => {
  // const [data, setData] = useState(null);

  // const dataCall = async () => {
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //     console.log("data", response.data);
  //     // console.log("userId", data.data[0].userId);
  //     // console.log("title", data.data[0].title);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }

  // const [info, setInfo] = useState([]);

  // const dataCall = async () => {
  //   try {
  //     const data = await axios.get("https://api.github.com/repos/facebook/create-react-app/issues")
  
  //     for (let i = 0; i < data.data.length; i++) {
  //       const comments = data.data[i].comments;
  //       // console.log("comments", comments);
  
  //       if (comments !== 0) {
  //         const commentsNum = data.data[i].number;
  
  //         const commentsUrl = await axios.get(`https://api.github.com/repos/facebook/create-react-app/issues/${commentsNum}/comments`)
  
  //         console.log(commentsUrl.data.length);
  
  //         for (let j = 0; j < commentsUrl.data.length; j++) {
  //           const commentsBody = commentsUrl.data[j].body;
  //           // console.log("comments body", commentsBody);
  //         }
  //       }
  //     }
  
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  // dataCall();


  // const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   const fetchInfo = async () => {
  //     try {
  //       const response = await axios.get("https://api.github.com/repos/facebook/create-react-app/issues");
  //       setInfo(response.data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }

  //   fetchInfo();
  // }, [])
  


  return (
    <>
      <List />
      {/* <div>
        {data && <li>{data.map((el) => el.title)}</li>}
      </div> */}
    </>
  );
};

export default Main;