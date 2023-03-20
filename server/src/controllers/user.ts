import { RequestHandler } from 'express';

const userInfo: {name: string}[] = []

export const getUserInfo: RequestHandler = (req, res, next) =>{
    // console.log('getUserInfo')
    // const user = (req.body as {text: string}).text

    // const targetUser = userInfo.find((item) => item.name === user)

    res.status(201).json({
        message: '取得該使用者',
        user: '123'
    })
}