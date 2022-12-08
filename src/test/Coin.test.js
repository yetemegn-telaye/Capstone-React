import { render, cleanup } from '@testing-library/react';
import Coin from '../__mock__/Coin';

afterEach(() => {
  cleanup();
});

describe('Coin', () => {
  it('Coin renders correctly', () => {
    const coin = render(<Coin />);
    expect(coin).toMatchSnapshot();
  });
});
