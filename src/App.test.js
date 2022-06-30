import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/spoooooky/i);
  expect(linkElement).toBeInTheDocument();
});


test('if user clicks ghost button it should add a ghost to the screen', () => {
  render(<App />);
  const ghostElementsAtLoad = screen.queryAllByAltText(/ghost/i);
  expect(ghostElementsAtLoad.length).toBe(1);
  const ghostButton = screen.getByText(/add ghost/i);
  fireEvent.click(ghostButton);
  const ghostElementsAfterClick = screen.queryAllByAltText(/ghost/i);
  expect(ghostElementsAfterClick.length).toBe(2);
});

test('if user clicks vampire button it should add a vampire to the screen', () => {
  render(<App />);
  const vampireElementsAtLoad = screen.queryAllByAltText(/vampire/i);
  expect(vampireElementsAtLoad.length).toBe(1);
  const vampireButton = screen.getByText(/add vampire/i);
  fireEvent.click(vampireButton);
  const vampireElementsAfterClick = screen.queryAllByAltText(/vampire/i);
  expect(vampireElementsAfterClick.length).toBe(2);
});

test('if user clicks frankenstein button it should add a frankenstein to the screen', () => {
  render(<App />);
  const frankensteinElementsAtLoad = screen.queryAllByAltText(/frankenstein/i);
  expect(frankensteinElementsAtLoad.length).toBe(1);
  const frankensteinButton = screen.getByText(/add frankenstein/i);
  fireEvent.click(frankensteinButton);
  const frankensteinElementsAfterClick = screen.queryAllByAltText(/frankenstein/i);
  expect(frankensteinElementsAfterClick.length).toBe(2);
});

test('if user clicks witch button it should add a witch to the screen', () => {
  render(<App />);
  const witchElementsAtLoad = screen.queryAllByAltText(/witch/i);
  expect(witchElementsAtLoad.length).toBe(1);
  const witchButton = screen.getByText(/add witch/i);
  fireEvent.click(witchButton);
  const witchElementsAfterClick = screen.queryAllByAltText(/witch/i);
  expect(witchElementsAfterClick.length).toBe(2);
});
