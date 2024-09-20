import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/todos/1', () => {
        console.log('Captured a "GET /posts" request')
        return new HttpResponse.json({
            id: 140,
            firstname: "Ben"
        })
    }),
    http.get("/api/users", () => {
        return HttpResponse.json([
            {
                id: 1,
                name: "anson",
            },
        ]);
    }),

]