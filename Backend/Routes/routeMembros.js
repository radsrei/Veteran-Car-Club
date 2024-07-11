import express from 'express'
import {getMembros, createMembros, updateMembros, deleteMembros} from '../Controllers/ContMembros.js'



router.get('/membros', getMembros)
router.post('/membros',createMembros)
router.put('/membros/:id', updateMembros)
router.delete('/membros/:id', deleteMembros)

export default router
