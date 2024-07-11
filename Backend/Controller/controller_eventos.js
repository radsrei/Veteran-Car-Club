import e from "express";
import professor from "../models/modelEventos.js";

export const getProfessor = async (req, res) => {
    try {
        const professores = await professor.findAll()
        res.send(professores)
    } catch (error) {
        console.log("Erro ao acessar a tabela Professor")
    }
}

export const createProfessor = async (req, res) => {
    try {
        await professor.create(req.body)
        res.json({
            "message":"Um novo registro de professor"
        })
    } catch (error) {
        console.log("Erro ao inserir um novo registro")
    }
}

export const updateProfessor = async (req,res) =>{
    try {
        await professor.update(req.body,{
            where: {
                matr_professor: req.params.matr
            }
        })
        res.json({
            "message":"O professor" + req.params.matr + "foi atualizado"
        })
    } catch (error) {
        console.log("Erro ao atualizar")
    }
}

export const deleteProfessor = async (req,res) =>{
    try {
        await professor.destroy({
            where: {
                matr_professor: req.params.matr
            }
        })
        res.json({
            "message":"O professor" + req.params.matr + "foi apagado"
        })
    } catch (error) {
        console.log("Erro ao inserir um novo registro")
    }
}