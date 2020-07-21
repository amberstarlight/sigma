import React from 'react';
import './App.css';
import FileList from './components/FileList/FileList';

const exampleJSON = require("./exampleData.json");

function App() {
  return (
    <>
    <h2>{exampleJSON.currentPath}</h2>
    <FileList
      comparisonFunction={(a,b) => {
        if (a.type === "file") return 1;
        if (a.type === "directory") return -1;
        if (a.type === b.type) return 0;
      }}
      items={exampleJSON.items}
    />
    </>
  );
}

export default App;
