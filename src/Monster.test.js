import { render, screen } from '@testing-library/react';
import Monster from './Monster';

test('if we pass a vampire to Monster it should render a vampire image', () => {
  render(<Monster monster ='vampire' />);
  const vampireElement = screen.queryByAltText(/vampire/i);
  expect(vampireElement).toBeInTheDocument();
});

test('if we pass a witch to Monster it should render a witch image', () => {
  render(<Monster monster ='witch' />);
  const witchElement = screen.queryByAltText(/witch/i);
  expect(witchElement).toBeInTheDocument();
});

test('if we pass a frankenstein to Monster it should render a frankenstein image', () => {
  render(<Monster monster ='frankenstein' />);
  const frankensteinElement = screen.queryByAltText(/frankenstein/i);
  expect(frankensteinElement).toBeInTheDocument();
});

test('if we pass a ghost to Monster it should render a ghost image', () => {
  render(<Monster monster ='ghost' />);
  const ghostElement = screen.queryByAltText(/ghost/i);
  expect(ghostElement).toBeInTheDocument();
}); 