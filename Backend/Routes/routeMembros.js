import express from 'express'
import {getMembros, createMembros, updateMembros, deleteMembros} from '../Controllers/ControllerMembros.js'

const router = express.Router()

router.get('/membros', getMembros)
router.post('/membros',createMembros)
router.put('/membros/:id', updateMembros)
router.delete('/membros/:id', deleteMembros)

export default router
