import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllComidas = async () => {
    return await prisma.comida.findMany({
        orderBy: { nome: 'asc' }
    });
};

export const getComidaById = async (id) => {
    return await prisma.comida.findUnique({
        where: { id: Number(id) }
    });
};

export const create = async (dados) => {
    return await prisma.comida.create({
        data: {
            nome: dados.nome,
            tipo: dados.tipo,
            preco: dados.preco,
            descricao: dados.descricao
        }
    });
};

export const deletar = async (id) => {
    return await prisma.comida.delete({
        where: { id: Number(id) }
    });
};

export const atualizar = async (id, dado) => {
    return await prisma.comida.update({
        where: { id: Number(id)},
        data: {
            ...(dado.nome && { nome: dado.nome}),
            ...(dado.tipo && { tipo: dado.tipo }),
            ...(dado.preco !== undefined && { preco: dado.preco }),
            ...(dado.descricao && { descricao: dado.descricao }),
        }
    });
};