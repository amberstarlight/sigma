import React from 'react';
import './FileList.css';

import LineItem from '../LineItem/LineItem.js';

function FileList({items, comparisonFunction}) {
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