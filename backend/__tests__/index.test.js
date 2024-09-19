import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { server } from "../mockServer";
import { http, HttpResponse } from "msw";
import User from "../User.js";

vi.mock('../User.js')


describe('Index', () => {

    beforeAll(() => {
        server.listen()
    })
    beforeEach(() => {

        server.resetHandlers()

    })
    afterAll(() => {
        server.close()
    })

    it('Should overide default handler setup', async () => {
        server.use(
            http.get('https://jsonplaceholder.org/users', () => {
                return HttpResponse.json({
                    id: 102,
                    firstname: "John",
                    lastname: "Doe"
                })
            })
        )
        const user = await (await fetch('https://jsonplaceholder.org/users')).json()
        console.log('John', user)
        expect(user.id).toBe(102)
        expect(user.firstname).toMatch(/john/i)
        expect(user.lastname).toMatch(/doe/i)

    })

    it('Should display user info', async () => {

        const user = await (await fetch('https://jsonplaceholder.org/users')).json()
        console.log('Jane', user)
        expect(user.id).toEqual('101')
        expect(user.firstname).toMatch(/jane/i)
        expect(user.lastname).toMatch(/does/i)
    })

    it('Should mock User class', async () => {
        const user = new User('Nas', 'Bech')

        vi.mocked(user.getFirstname).mockResolvedValue("TEST")
        const getLastnameSpy = vi.spyOn(User.prototype, 'getLastname').mockResolvedValue('GRAOU')
        vi.mocked(user.getFullname).mockResolvedValue("my fullname")

        console.log('FIRSTNAME', await user.getFirstname())
        console.log('LASTNAME', await getLastnameSpy())
        console.log('FULLNAME', await user.getFullname())
    })
})