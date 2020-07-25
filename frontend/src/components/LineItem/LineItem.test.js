import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineItem from './LineItem.js';

const exampleDirectory = {
  'type': 'directory',
  'name': 'images',
  'children': 12,
  'dateCreated': '1578032594746'
};

const exampleFile = {
  'type': 'file',
  'name': 'funny_cat.png',
  'fileinfo': {
    'dateCreated': '1584531834000',
    'lastModified': '1595356287797',
    'mime': 'image/png',
    'size': 1024
  }
};

describe('render a line item', () => {
  test('render directory line item correctly', () => {
    render(<LineItem item={exampleDirectory}/>);
  
    expect(screen.getAllByRole('checkbox').length).toStrictEqual(1);
    expect(screen.getByRole('link')).toHaveTextContent('images');
    expect(screen.getAllByRole('img').length).toStrictEqual(1);
    expect(screen.getByText('03/01/2020, 06:23:14')).toBeInTheDocument();
    expect(screen.getByText('12 items')).toBeInTheDocument();
  });
  
  test('render file line item correctly', () => {
    render(<LineItem item={exampleFile}/>);
  
    expect(screen.getAllByRole('checkbox').length).toStrictEqual(1);
    expect(screen.getByRole('link')).toHaveTextContent('funny_cat.png');
    expect(screen.getAllByRole('img').length).toStrictEqual(1);
    expect(screen.getByText('21/07/2020, 19:31:27')).toBeInTheDocument();
    expect(screen.getByText('1.00KiB')).toBeInTheDocument();
  });
});
