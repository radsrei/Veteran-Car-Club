import express from 'express'
import {getEventos, createEventos, updateEventos, deleteEventos} from '../Controllers/ControllerEventos.js'

const router = express.Router()

router.get('/eventos', getEventos)
router.post('/eventos',createEventos)
router.put('/eventos/:id', updateEventos)
router.delete('/eventos/:id', deleteEventos)

 export default router
