import { render } from "@testing-library/react"
import CoinDetail from "../__mock__/CoinDetail";

describe('CoinDetail', ()=>{
    it('CoinDetail renders correctly',()=>{
        const coinDetail = render(<CoinDetail/>);
        expect(coinDetail).toMatchSnapshot();
    });
});