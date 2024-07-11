import express from 'express'
import {getFinanceiro, createFinanceiro, updateFinanceiro, deleteFinanceiro} from '../Controllers/ContFinanceiro.js'


const router = express.Router()

router.get('/financeiro', getFinanceiro)
router.post('/financeiro',createFinanceiro)
router.put('/financeiro/:id', updateFinanceiro)
router.delete('/financeiro/:id', deleteFinanceiro)

export default router