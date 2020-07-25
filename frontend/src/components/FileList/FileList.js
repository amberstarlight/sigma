import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FileList.css';

import LineItem from '../LineItem/LineItem.js';

function FileList({items, comparisonFunction}) {

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then( res => { console.log(res); } );
  }, []);

  let itemsSorted = [...items];
  if (comparisonFunction) itemsSorted.sort(comparisonFunction);
  
  return (
    <>
      {itemsSorted.map((item, index) => 
        <LineItem item={item} key={index}/>
      )}
    </>
  );
}

FileList.propTypes = {
  items: PropTypes.object,
  comparisonFunction: PropTypes.func
};

export default FileList;