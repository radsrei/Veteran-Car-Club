import express from 'express'

const router = express.Router()

router.get('/membros', getMembros)
router.post('/membros',createMembros)
router.put('/membros/:id', updateMembros)
router.delete('/membros/:id', deleteMembros)

export default router