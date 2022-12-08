import { render } from "@testing-library/react"
import HomePage from "../__mock__/HomePage";




describe('HomePage', ()=>{
    it('HomePage renders correctly',()=>{
        const home = render(<HomePage/>);
        expect(home).toMatchSnapshot();
    });
});