import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const fetchColors = () => {
    axiosWithAuth().get("/api/colors")
    .then(response => {
      // console.log(`response BubblePage.js -->`, response)
      setColorList(response.data)      
    })
    .catch(error => {console.log(`There was an error`, error)})
  }
  

  useEffect(() => {
    fetchColors();    
  }, [])

  return (
    <>
      <ColorList 
        colors={colorList} 
        updateColors={setColorList}
        fetchColors={fetchColors}
      />
      <Bubbles 
        colors={colorList} 
      />
    </>
  );
};

export default BubblePage;
