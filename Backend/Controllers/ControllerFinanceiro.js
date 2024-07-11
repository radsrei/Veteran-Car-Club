import finaceiro from "../Models/modelFinanceiro.js"

export const getFinanceiro = async (req, res) => {
    try {
        const finaceiro = await finaceiro.findAll()
        res.send(finaceiro)
    } catch (e) {
        console.log("Erro ao acessar a tabela Profesor",e)
    }
} 

export const createFinanceiro = async (req, res) => {
    try {
        await finaceiro.create(req.body)
        res.json({
            "message":"Um novo registro de finaceiro foi inserido"
        })

    } catch (e) {
        console.log("Erro ao inserir um novo registro", e)

    }
}

export const updateFinanceiro = async (req, res) => {
    try {
        await finaceiro.update(req.body,{
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O finaceiro " + req.params.matr +  " foi atualizado"
        })
    } catch (e) {
        console.log("Erro ao atualizar registro finaceiro!")

    }
}

export const deleteFinanceiro = async (req, res) => {
    try {
        await finaceiro.destroy({
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O finaceiro " + req.params.matr +  " foi excluído"
        })
    } catch (e) {
        console.log("Erro ao excluir registro finaceiro!")

    }
}



