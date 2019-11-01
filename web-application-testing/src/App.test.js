import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

import DisplayBoard, { addOne, reset } from './components/DisplayBoard';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Renders without crashing", () => {
  render(<App />);
});

test("Header Title renders to page", () => {
  const { getByTestId } = render(<App />);
  getByTestId("title");
  //console.log(getByTestId('title'));
});

//================================
//tests for DisplayBoard.js
/*test("Balls header renders from DisplayBoard", () => {
  //by TestId because many /balls/i on page
  const { getbyTestId } = render(<App/>);
  getbyTestId("ballsHeader");
});
*/

test("Strikes header renders from DisplayBoard", () => {
  const { getByText } = render(<App/>);
  getByText(/strikes/i);
});

//======================================
//tests for Buttons.js

test("Ball button displayed", () => {
  const { getByTestId } = render(<App/>);
  getByTestId("ballButton");
});

test('Foul button displayed', () => {
  const { getByText } = render(<App/>);
  getByText(/foul/i);
})

//=========================
//tests for functions
test('reset returns 0', () => {
  let actual;
  let expected;

  actual = reset(1);
  expected = 0;

  expect(actual).toBe(expected);
  expect(actual).not.toBe(1);
});

test('addOne adds one to arg', () => {
let actual;
let expected;

actual = addOne(2);
expected = 3;

expect(actual).toBe(expected);
expect(actual).not.toBe(2);

});
