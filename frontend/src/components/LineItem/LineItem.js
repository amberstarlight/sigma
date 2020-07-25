import React from 'react';
import PropTypes from 'prop-types';
import './LineItem.css';

import directoryIcon from '../../images/dir.png';
import fileIcon from '../../images/file.png';

import Input from '../Input/Input.js';

// component that displays an item (be it a directory or a file) inside the current working directory.
// each line item will have a type, a name, a last modified date, and a size on disk.
// directories and files have different icons.
// files have extensions.
// each line item should be selectable (checkbox)
// each line item should be clickable: directories take you into that folder, and files take you directly to the file (initiating a download in most browsers?)

const iconLookup = {
  'directory': directoryIcon,
  'file': fileIcon
};

function humanReadableFilesize(filesize) {
  const power1024 = pow => Math.pow(1024, pow);
  if (filesize >= power1024(4)) return `${(filesize/power1024(4)).toFixed(2)}TiB`;
  if (filesize >= power1024(3)) return `${(filesize/power1024(3)).toFixed(2)}GiB`;
  if (filesize >= power1024(2)) return `${(filesize/power1024(2)).toFixed(2)}MiB`;
  if (filesize >= 1024) return `${(filesize/1024).toFixed(2)}KiB`;
  return `${filesize}B`;
}

function LineItem({item}) {

  let itemDescription;
  if (item.type === 'directory') {
    itemDescription = (
      <>
        <p>{item.children} items</p>
        <p>{(new Date(parseInt(item.dateCreated))).toLocaleString('en-GB')}</p>
      </>
    );
  } else {
    itemDescription = (
      <>
        <p>{(new Date(parseInt(item.fileinfo.lastModified))).toLocaleString('en-GB')}</p>
        <p>{humanReadableFilesize(item.fileinfo.size)}</p>
      </>);
  }

  return (
    <div className="item">
      <Input type="checkbox"></Input>
      <img
        src={iconLookup[item.type]}
        alt={'file'}
      />
      <a href="#test">{item.name}</a>
      {itemDescription}
    </div>
  );
}

LineItem.propTypes = {
  item: PropTypes.object
};

export default LineItem;
