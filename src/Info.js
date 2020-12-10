import React, {useState, useEffect} from "react";

const Info = props => {
    const { textInfo, setTextInfo} = props
   // const firstInfo = textInfo.explanation;
   // const secondInfo = textInfo.date;
    //const thirdInfo = textInfo.copyright;

    //const getTextInfo = info => {
       // setTextInfo(info);
   // }

   //const changeColor = (info) => {
     //  info.style.color = 'red';
    //}

    return (
       <div>
         <p> {textInfo} </p>
         <button> Change Color </button>
       </div>
    )
};

export default Info;