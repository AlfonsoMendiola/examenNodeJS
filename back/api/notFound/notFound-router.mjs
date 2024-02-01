import { Router } from "express";

const notFoundRouter = Router()

notFoundRouter.all('*', (req, res) => {
    return res.status(400).json({error: 'url no valida'})
})

export { notFoundRouter }