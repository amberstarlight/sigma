import React, { useEffect } from 'react';
import axios from 'axios';
import './FileList.css';

import LineItem from '../LineItem/LineItem.js';

function FileList({items, comparisonFunction}) {

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then( res => { console.log(res) } );
  }, [])

  let itemsSorted = [...items];
  if (comparisonFunction) itemsSorted.sort(comparisonFunction);
  
  return (
    <>
      {itemsSorted.map((item, index) => 
        <LineItem item={item} key={index}/>
      )}
    </>
  )
};

export default FileList;