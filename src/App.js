import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { imgURL, API_KEY } from './APOD';


function App() {
  const [image, setImage] = useState();
  useEffect(() => {
    const fetchImage = () => {
      axios
        .get(`${imgURL}${API_KEY}`)
        .then((res) => {
          setImage(res.data.url)          ;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchImage();
    
  }, []);
  return (
    <div className="App">
      <img src = {image} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
