import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { imgURL, API_KEY } from './APOD';
import Title from './Title';
import Info from './Info';


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
    <div className="App">
      <Title title = {title} />
      <div className='App-header'>
        <img  src = {image} alt= 'An erupting sun.' />
      </div>
      <Info textInfo = {textInfo} setTextInfo = {setTextInfo} />
    </div>
  );
}

export default App;
