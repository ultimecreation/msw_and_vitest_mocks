import express from 'express'


const app = express()
app.use(express.json())
app.get('/', async (req, res) => {
    const users = await (await fetch('https://jsonplaceholder.org/users')).json()
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    return res.json({ "users": users })
})
app.listen(3000, () => console.log('server started'))