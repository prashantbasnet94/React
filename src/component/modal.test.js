import { ModalCmp } from "./modal"
import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from "@testing-library/react";



describe("PopUp Modal Test", () => {
    let
        component = renderer.create(<ModalCmp />),
        mycmp = component.toJSON()


    it('Is a button and not disabled', () => {
        expect(mycmp.type).toEqual('button')
        expect(mycmp?.props?.disabled).toBeFalsy()
    })


    it('On click, modal should appear', async () => {
        render(<ModalCmp />)
 

        fireEvent.click(screen.getByTestId('openModal'))
 
        expect(screen.getByText('Basic Modal')).toBeInTheDocument()
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('OK')).toBeInTheDocument()
        expect(screen.queryByText('Close')).not.toBeInTheDocument()

 


        // const modalPopUp = screen.getByTestId('openModal')
    });
})