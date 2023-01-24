 import { LoginCmp } from './login'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, screen, render } from '@testing-library/react'

describe('Testing Login Cmp', () => {

    const
        fakeUserResponse = { token: 'fake_user_token' },
        server = setupServer(
            rest.post('/api/login', (req, res, ctx) => {
                return res(ctx.json(fakeUserResponse))
            })
        )
    // setup a mock node server

    beforeAll(() => server.listen())
    afterAll(() => server.close())

    it('ALlows user to login', async () => {
        render(<LoginCmp />)

        // /i => ignore case sensitive
        // simulate type in username  @1st = selector              @ 2nd = value to change
        fireEvent.change(screen.getByLabelText(/Username/i), {target:{value: 'Prashantbasnet94'}})

        //same for password
        fireEvent.change(screen.getByLabelText(/Password/i), {target: {value: '**************'}})
        //click submit button
        fireEvent.click(screen.getByText(/Submit/i))

        const alert = await screen.findByRole('alert')
        expect(alert).toHaveTextContent(/Congrats/i)
    })
})
