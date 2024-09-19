import { http, HttpResponse } from "msw";


export const handlers = [
    http.get('https://jsonplaceholder.org/users', () => {
        return HttpResponse.json({
            id: '101',
            firstname: 'jane',
            lastname: 'does'
        })
    })
]