import express from 'express'

import { json } from 'body-parser';

import userInfoRoutes from './routes/user'

const app = express()

app.use(json());

app.use('/userInfo', userInfoRoutes)

app.listen(6000, ()=>{
    console.log('run in 6000!')
})