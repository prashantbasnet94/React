import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Testcases on routes',  () => {

    const  activity = userEvent.setup()
    it('Make sure nav links are present', async () => {
        render(<App/>)
        expect(screen.getByText(/About/i)).toBeInTheDocument()
       await activity.click(screen.getByText(/about us/i))
    //    expect(screen.getByText(/you are on about us page/i)).toBeInTheDocument()
    })

})