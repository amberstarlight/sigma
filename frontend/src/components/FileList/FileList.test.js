import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileList from './FileList.js';

const testItems = [
  {
    'type': 'directory',
    'name': 'images',
    'children': 12,
    'dateCreated': '1578032594746'
  },
  {
    'type': 'directory',
    'name': 'config',
    'children': 4,
    'dateCreated': '1578032564000'
  },
  {
    'type': 'file',
    'name': 'funny_cat.png',
    'fileinfo': {
      'dateCreated': '1584531834000',
      'lastModified': '1595356287797',
      'mime': 'image/png',
      'size': 1024
    }
  },
  {
    'type': 'directory',
    'sym-link': true,
    'name': 'cool-folder-link',
    'children': 10,
    'dateCreated': '1595000000'
  },
  {
    'type': 'file',
    'sym-link': true,
    'name': 'cool-link',
    'fileinfo': {
      'dateCreated': '1595200411',
      'lastModified': '1595356407',
      'mime': 'image/png',
      'size': 2773942
    }
  }
];

describe('render a list of provided items', () => {
  beforeEach(() => 
    render(
      <FileList
        comparisonFunction={(a,b) => {
          if (a.type === 'file') return 1;
          if (a.type === 'directory') return -1;
          if (a.type === b.type) return 0;
        }}
        items={testItems}
      />
    )
  );

  test('render 5 checkboxes', () => {
    expect(screen.getAllByRole('checkbox').length).toStrictEqual(5);
  });

  test('render 5 images', () => {
    expect(screen.getAllByRole('img').length).toStrictEqual(5);
  });
  
  test('render 5 links', () => {
    expect(screen.getAllByRole('link').length).toStrictEqual(5);
  });

  test('renders test directory', () => {
    expect(screen.getAllByText('12 items').length).toStrictEqual(1);
    expect(screen.getByText('12 items')).toBeInTheDocument();
  }); 
});
