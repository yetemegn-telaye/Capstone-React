import { render, cleanup } from '@testing-library/react';
import HomePage from '../__mock__/HomePage';

afterEach(() => {
  cleanup();
});

describe('HomePage', () => {
  it('HomePage renders correctly', () => {
    const home = render(<HomePage />);
    expect(home).toMatchSnapshot();
  });
});
