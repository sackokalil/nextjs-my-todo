'use client'
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteTodo } from "@/app/lib/actions";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toast } from "@/app/ui/Toast";

export function UpdateTodo({id}:{id:string}){
    return(
        <Link
            href={`/todos/${id}/edit`}
            className="btn btn-update"
            
        >
            <PencilSquareIcon style={{width:'20px'}} />
        </Link>
    )
}



export function DeleteTodo({id}:{id:string}){

    const handleDelete = async()=>{
        const confirmed = window.confirm('Would you like to definitely delete this item?')
        if(!confirmed){
            return
        }

        const response = await deleteTodo(id)

        //on est deja sur la route '/todos' donc ce n'est pas important de faire un push() vers cette 
        //meme url après la supprission, vue qu'on a pas quitté cette page. mais pour que cette page
        //se rafraichissent le revalidatPath('/todos') doit etre à la fin de la fonction server action
        //deleteTodo(id)
        if (response.message === 'success'){
            toast.success('Item deleted Successfully')

        }else if(response.message ==='error'){
            toast.error('Error while deleting the item')
        }
            
    }

    return(
        <>
            <Toast />
            <button onClick={handleDelete} className="btn btn-delete">
                <TrashIcon style={{width:'20px'}} />
            </button>
        </>
    )

}


// export function DeleteTodo({id}:{id:string}){


//     const deleteTodoWithId = deleteTodo.bind(null, id)
//     return(
//         <form action={deleteTodoWithId}>
//             <button className="btn btn-delete">
//                 <TrashIcon style={{width:'20px'}} />
//             </button>
//         </form>
//     )

// }