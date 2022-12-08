import { render, cleanup } from '@testing-library/react';
import CoinDetail from '../__mock__/CoinDetail';

afterEach(() => {
  cleanup();
});

describe('CoinDetail', () => {
  it('CoinDetail renders correctly', () => {
    const coinDetail = render(<CoinDetail />);
    expect(coinDetail).toMatchSnapshot();
  });
});
