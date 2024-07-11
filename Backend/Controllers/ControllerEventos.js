import evento from "../Models/modelEventos.js"

export const getEventos = async (req, res) => {
    try {
        const evento = await evento.findAll()
        res.send(evento)
    } catch (e) {
        console.log("Erro ao acessar a tabela Profesor",e)
    }
} 

export const createEventos = async (req, res) => {
    try {
        await evento.create(req.body)
        res.json({
            "message":"Um novo registro de evento foi inserido"
        })

    } catch (e) {
        console.log("Erro ao inserir um novo registro", e)

    }
}

export const updateEventos = async (req, res) => {
    try {
        await evento.update(req.body,{
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O evento " + req.params.matr +  " foi atualizado"
        })
    } catch (e) {
        console.log("Erro ao atualizar registro evento!")

    }
}

export const deleteEventos = async (req, res) => {
    try {
        await evento.destroy({
            where: {
                id: req.params.matr
            }
        })
        res.json({
            "message":"O evento " + req.params.matr +  " foi excluído"
        })
    } catch (e) {
        console.log("Erro ao excluir registro evento!")

    }
}



