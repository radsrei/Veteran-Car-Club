import express from 'express'

const router = express.Router()

router.get('/veiculos', getVeiculos)
router.post('/veiculos',createVeiculos)
router.put('/veiculos/:id', updateVeiculos)
router.delete('/veiculos/:id', deleteVeiculos)

export default router