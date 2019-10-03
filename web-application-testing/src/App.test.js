import React from 'react';
import { render } from "@testing-library/react"
import App from './App';

it('renders without crashing', () => {
  render(<App/>)
}); 

test ('Strike header is found', () =>{
  const { getByTestId} = render(<App/>);
  getByTestId('strikeHeader');
});
test ('Ball header is found', () =>{
  const { getByTestId} = render(<App/>);
  getByTestId('ballHeader');
});
test ('Strike button is found', () =>{
  const { getByTestId} = render(<App/>);
  getByTestId('strikeButton');
});
test ('Ball button is found', () =>{
  const { getByTestId} = render(<App/>);
  getByTestId('ballButton');
});

test ('Foul button is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/foul/i);
});

test ('Hit button is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/hit/i);
});




