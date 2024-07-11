import membro from "../Models/modelMembros.js"

export const getMembros = async (req, res) => {
    try {
        const membro = await membro.findAll()
        res.send(membro)
    } catch (e) {
        console.log("Erro ao acessar a tabela Profesor",e)
    }
} 

export const createMembros = async (req, res) => {
    try {
        await membro.create(req.body)
        res.json({
            "message":"Um novo registro de membro foi inserido"
        })

    } catch (e) {
        console.log("Erro ao inserir um novo registro", e)

    }
}

export const updateMembros = async (req, res) => {
    try {
        await membro.update(req.body,{
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O membro " + req.params.matr +  " foi atualizado"
        })
    } catch (e) {
        console.log("Erro ao atualizar registro membro!")

    }
}

export const deleteMembros = async (req, res) => {
    try {
        await membro.destroy({
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O membro " + req.params.matr +  " foi excluído"
        })
    } catch (e) {
        console.log("Erro ao excluir registro membro!")

    }
}



