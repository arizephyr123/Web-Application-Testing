import React from 'react';
import { render } from "@testing-library/react"
import App from './App';

it('renders without crashing', () => {
  render(<App/>)
}); 

test ('Strikes header is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/strikes/i);
});

test ('Balls header is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/balls/i);
});


