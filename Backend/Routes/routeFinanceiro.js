import express from 'express'

const router = express.Router()

router.get('/financeiro', getFinanceiro)
router.post('/financeiro',createFinanceiro)
router.put('/financeiro/:id', updateFinanceiro)
router.delete('/financeiro/:id', deleteFinanceiro)

export default router