import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { imgURL, API_KEY } from './APOD';
import Title from './Title';
import Info from './Info';
import styled from 'styled-components';


function App() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [textInfo, setTextInfo] = useState();
  useEffect(() => {
    const fetchImage = () => {
      axios
        .get(`${imgURL}${API_KEY}`)
        .then((res) => {
          setImage(res.data.url);
          setTitle(res.data.title);
          setTextInfo(res.data.explanation);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchImage();
    
  }, []);
  return (
    <StyledDiv>
      <Title title = {title} />
      <StyledImageDiv>
        <img src = {image} alt= 'An erupting sun.' />
        <Info textInfo = {textInfo} />
      </StyledImageDiv>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${pr => pr.theme.primaryColor};
  margin-bottom: 0;
  height: 100%;
  padding-bottom: 5%;

  
  
  h1 {
    color: ${pr => pr.theme.black};
    font-weight: bolder;
  }
`;

const StyledImageDiv = styled.div`
  background-color: ${pr => pr.theme.black};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  width: 80%;
  

  img {
    height: 50%;
    width: 50%;
    padding-left: 23%;
    padding-top: 6%;
    &:hover {
      transform: scale(1.5);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }

  p {
    color: ${pr => pr.theme.primaryColor};
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 2%;
    font-size: 1.1rem;
    &:hover {
      color: ${pr => pr.theme.tertiaryColor};
      transform: scale(1.2);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
  
`;

export default App;
