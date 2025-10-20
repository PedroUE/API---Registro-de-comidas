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