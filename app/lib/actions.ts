'use server'


import {z} from 'zod'
import { formState, } from './definitions'
import prisma from "@/app/db"
import { revalidatePath } from 'next/cache'
import { title } from 'process'



export async function  createTodo(
    prevState:formState, 
    formData: FormData
): Promise<formState>{
    
    const schema = z.object({
        title :z.string(),
        date : z.string()
    })

    const parse = schema.safeParse({
        title: formData.get('title'),
        date: formData.get('date')
    })

    if (! parse.success){
        return {message: 'error'}
    }

    const data = parse.data

    try{

        await prisma.todo.create({
            data:{
                title : data.title,
                date : data.date
            }
        })


        revalidatePath('/todos')
        return {message: 'success'}

    }catch(error){
        return {message : 'error'}
    }

}

export async function updateTodo(prevState:formState, formData:FormData):Promise<formState>{

    const schema = z.object({
        title : z.string(),
        date: z.string(),
        id: z.string()
    })
    const parse = schema.safeParse({
        title: formData.get('title'),
        date: formData.get('date'),
        id: formData.get('id')
    })
    if(!parse.success){
        return {message : 'Error'}
    }

    const data = parse.data

    try{

        await prisma.todo.update({
            where:{id:data.id},
            data:{
                title: data.title,
                date: data.date
            }
        })

        revalidatePath('/todos')

        return {message: 'success'}

    }catch(error){
        return {message: 'error'}
    }

    
    
}

export async function deleteTodo(id:string){

    try{
        await prisma.todo.delete({
            where:{id:id}
        })

        revalidatePath('/todos')
        return {message: 'success'}

    }catch(error){
        return{message: 'error'}
    }
}
