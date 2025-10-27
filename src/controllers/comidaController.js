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

export const criar = async (req, res) => {
  try {
    const {  } = req.body;

    if (!nome || !tipo) {
      return res.status(400).json({ 
        erro: 'comando mal executado - campos obrigatórios faltando',
        camposObrigatorios: ['nome', 'tipo']
      });
    }
    
 
    const tiposValidos= ['salgado', 'doce'];
    if (!tiposValidos.includes(tipo)) {
      return res.status(400).json({
        erro: 'tipo inválido! adicione um tipo valido!',
        tiposValidos
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

export const deletar = async (req,res) => {
    try {
        const id = parseInt(req.params.id);

        const comidaExiste = await comidaModel.encontreUM(id);

        if(!comidaExiste) {
            return res.status(404).json({
                error: 'Comida não encontrada com esse id',
                id: id
            })
        }

        await comidaModel.deletar(id);

        res.status(200).json({
            mensagem: 'Comida deletada com sucesso!',
            comidaRemovida : comidaExiste
        })
    } catch (error) {
        req.status(500).json({
            error: 'Error ao apagar a comida!',
            detalhes: error.message
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const comidaExiste = await comidaModel.encontreUM(id);

        if(!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não existe',
                id: id
            })
        }
        if(dados.tipo) {
         const tiposValidos= ['salgado', 'doce'];
    if (!tiposValidos.includes(tipo)) {
      return res.status(400).json({
        erro: 'tipo inválido! adicione um tipo valido!',
        tiposValidos
      });
    }
} 

        const comidaAtualizada = await comidaModel.atualizar(id, dados)

        res.status(200).json({
            mesagem: 'comida atualizada com sucesso!',
            comida: comidaAtualizada
        })
    } catch (error) {
        req.status(500).json({
            erro: 'Erro ao atualizar a comida',
            detalhes: error.message
        });
    }
};