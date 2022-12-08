import renderer from 'react-test-renderer';
import Coin from "../__mock__/Coin";



describe('Coin', ()=>{
    it('Coin renders correctly',()=>{
        const coin = renderer.create(<Coin />).toJSON();
        expect(coin).toMatchSnapshot();
    });
});