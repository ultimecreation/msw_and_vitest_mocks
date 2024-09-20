import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { server } from './test/mocks/server.js'

describe('MSW', () => {


    beforeAll(() => {
        server.listen({ onUnhandledRequest: 'error' })
    })
    beforeEach(() => {
        server.resetHandlers()
    })
    afterAll(() => {
        server.close()
    })


    it('Should run msw', async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const { id } = await data.json()
        console.log(id)
        expect(id).toBe(140)

    })

})