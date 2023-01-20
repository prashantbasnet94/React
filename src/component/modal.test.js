import { ModalCmp } from "./modal"
import renderer from 'react-test-renderer';

describe("testing modal pop up", () => {
    let
        component = renderer.create(<ModalCmp />),
        mycmp = component.toJSON()

    expect(mycmp).toMatchSnapshot();

    it('Should have a button and not disabled', () => {
        expect(mycmp.type).toEqual('button')
        expect(mycmp?.props?.disabled).toBeFalsy()
    })
})