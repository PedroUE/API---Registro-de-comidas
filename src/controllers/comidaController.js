
import * as comidaModel from '../models/comidaModel.js';

const TIPOS_VALIDOS = ['Principal', 'Sobremesa', 'Bebida', 'Aperitivo', 'Vegano'];

export const getAllComidas = async (req, res) => {
    try {
        const comidas = await comidaModel.getAllComidas();

        if (!comidas || comidas.length === 0) {
            return res.status(404).json({
                total: 0,
                message: 'nenhuma comida foi encontrada'
            });
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
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido. Deve ser um número inteiro.' });
        }

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

export const criar = async (req, res) => {
    try {
        const { nome, tipo, preco, descricao } = req.body;

        if (!nome || !tipo || preco === undefined || !descricao) {
            return res.status(400).json({
                erro: 'comando mal executado - campos obrigatórios faltando ou nulos',
                camposObrigatorios: ['nome', 'tipo', 'preco', 'descricao']
            });
        }
        
        if (typeof preco !== 'number' || isNaN(preco) || preco <= 0) {
             return res.status(400).json({
                erro: 'O preço (preco) deve ser um número positivo.'
            });
        }

        if (!TIPOS_VALIDOS.includes(tipo)) {
            return res.status(400).json({
                erro: 'tipo inválido! adicione um tipo valido!',
                tiposValidos: TIPOS_VALIDOS.join(', ')
            });
        }
        
        const novaComida = await comidaModel.create(req.body);
        
        res.status(201).json({
            mensagem: `🎓 ${nome} foi criada com sucesso!`,
            comida: novaComida
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar nova comida',
            detalhes: error.message
        });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido. Deve ser um número inteiro.' });
        }
        
        const comidaExiste = await comidaModel.getComidaById(id);

        if (!comidaExiste) {
            return res.status(404).json({
                error: 'Comida não encontrada com esse id',
                id: id
            });
        }

        await comidaModel.deletar(id);

        res.status(200).json({
            mensagem: 'Comida deletada com sucesso!',
            comidaRemovida: comidaExiste
        });
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao apagar a comida!',
            detalhes: error.message
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        if (isNaN(id)) {
            return res.status(400).json({ erro: 'ID inválido. Deve ser um número inteiro.' });
        }
        
        const comidaExiste = await comidaModel.getComidaById(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não existe',
                id: id
            });
        }

        if (dados.tipo) {
            if (!TIPOS_VALIDOS.includes(dados.tipo)) {
                return res.status(400).json({
                    erro: 'tipo inválido! adicione um tipo valido!',
                    tiposValidos: TIPOS_VALIDOS.join(', ')
                });
            }
        } 
        
        if (dados.preco !== undefined) {
             if (typeof dados.preco !== 'number' || isNaN(dados.preco) || dados.preco <= 0) {
                 return res.status(400).json({
                    erro: 'O preço (preco) deve ser um número positivo.'
                });
            }
        }

        const comidaAtualizada = await comidaModel.atualizar(id, dados)

        res.status(200).json({
            mensagem: 'comida atualizada com sucesso!',
            comida: comidaAtualizada
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar a comida',
            detalhes: error.message
        });
    }
};