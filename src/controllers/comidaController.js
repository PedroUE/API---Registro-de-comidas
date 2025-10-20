import * as comidaModel from '../models/comidaModel.js';

export const getAllComidas = async (req, res) => {
    try {
        const comidas = await comidaModel.getAllComidas();

        if (!bruxos || comidas.length === 0) {
            return res.status(404).json({ 
                total: 0,
                message: 'nenhuma comida foi encontrada'});
        }


        return res.status(200).json({
            total: comidas.length,
            message: 'comidas encontradas com sucesso',
            comidas: comidas
        });

    } catch (error) {

        return res.status(500).json({ 
            message: 'erro ao buscar comidas', 
            error: error.message 
        });
    }
};


export const getComidaById = async (req, res) => {
    try {
        const { id } = req.params;
        const comida = await comidaModel.getComidaById(id);

        if (!comida) {
            return res.status(404).json({ 
                message: 'comida não encontrada' 
            });
        }

        return res.status(200).json({
            message: 'comida encontrada com sucesso',
            comida: comida
        });

    } catch (error) {

        return res.status(500).json({ 
            message: 'erro ao buscar comida', 
            error: error.message 
        });
    }
};