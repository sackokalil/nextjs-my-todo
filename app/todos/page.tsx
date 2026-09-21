
import { formatDate } from "@/app/utils/formatDate"
import { getTodos } from "@/app/lib/data"
import {UpdateTodo, DeleteTodo} from "@/app/ui/ButtonIcons"
import { Todo } from "@/app/lib/definitions"


// interface Todo{
//   id : string
//   title : string
//   date: string
// }

const  TodoList = async()=>{

  const todos = await getTodos()

  if(!todos || todos.length===0){
    return <p>No available tasks</p>
  }
  
  return(
    <section >

      <h1 className="text-center">Created tasks</h1>
     

    
      <div className="listContainer">
        <ul className="ul-list mb w-60 shadow-hover" role="list">
          {
            todos.map((todo: Todo)=>(
              <li key={todo.id} className="li-list">
                <div className="todo">
                  <p className="date">{formatDate(todo.date)}</p>
                  <h2>{todo.title}</h2>

                  <div className="btnIconsContainer">
                    <UpdateTodo id={todo.id} />
                    <DeleteTodo id={todo.id}/>
                  </div>

                </div>
              </li>
            ))
          }
        </ul>
      </div>
    

    </section>
  )
}

export default TodoList
