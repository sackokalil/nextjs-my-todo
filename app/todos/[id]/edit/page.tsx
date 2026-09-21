import EditTodo from "@/app/ui/edit-form"
import prisma from "@/app/db"

import { getTodoById } from "@/app/lib/data"


const EditPage = async({params}:{params:Promise<{id:string}>}) => {
    
    const {id} = await params

    const todo = await getTodoById(id)
    if(!todo){
        return <p>No task to display</p>
    }

    return (
        <EditTodo todo={todo}/>
    )

    
}

export default EditPage

