import veiculo from "../Models/modelVeiculos.js"

export const getVeiculos = async (req, res) => {
    try {
        const veiculo = await veiculo.findAll()
        res.send(veiculo)
    } catch (e) {
        console.log("Erro ao acessar a tabela Profesor",e)
    }
} 

export const createVeiculos = async (req, res) => {
    try {
        await veiculo.create(req.body)
        res.json({
            "message":"Um novo registro de veiculo foi inserido"
        })

    } catch (e) {
        console.log("Erro ao inserir um novo registro", e)

    }
}

export const updateVeiculos = async (req, res) => {
    try {
        await veiculo.update(req.body,{
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O veiculo " + req.params.matr +  " foi atualizado"
        })
    } catch (e) {
        console.log("Erro ao atualizar registro veiculo!")

    }
}

export const deleteVeiculos = async (req, res) => {
    try {
        await veiculo.destroy({
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O veiculo " + req.params.matr +  " foi excluído"
        })
    } catch (e) {
        console.log("Erro ao excluir registro veiculo!")

    }
}



