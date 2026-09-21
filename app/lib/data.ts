import { connection } from "next/server";
import prisma from "@/app/db";



export async function getTodos(){
    await connection()//pour passer au rendu dynamique

    try{

        const data = await prisma.todo.findMany({
            orderBy:{date: 'desc'}
        });

        return data

    }catch(error){
        console.error('An error occured:', error)
        throw new Error('Error while retrieving data from database')
    }
}


export async function getTodoById(id:string){
    await connection()//pour passer au rendu dynamique

    try{

        const data = await prisma.todo.findUnique({
            where:{id: id}
        });

        return data

    }catch(error){
        console.error('An error occured:', error)
        throw new Error('Error while retrieving data from database')
    }
}