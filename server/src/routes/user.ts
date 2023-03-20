import { Router } from "express";
import {
    getUserInfo
} from '../controllers/user'

const router = Router()

router.post('/', getUserInfo)

export default router