'use client'

import { useEffect, useState, useRef, useActionState } from "react"
import { createTodo } from "@/app/lib/actions"
import { formState } from "@/app/lib/definitions"
import { toast } from "react-toastify"
import { Toast } from "@/app/ui/Toast"
import { useRouter } from "next/navigation"
import Button from "@/app/ui/Button"
 
const CreateTodo = ()=>{

  //le router
  const router = useRouter()

  //useRef est utilisé pour vider les champs après la soumission du formulaire,  utilisé dans useEffect
  const formRef = useRef<HTMLFormElement>(null)

  //avant la soumission du fomulaire le state = initial state.
  const initialState : formState = {
    message: '',
  }
  //with useActionState, après la soumission du formulaire le state est automatiquement mis à la valeur de
  //retour de la fonction createTodo
  const [state, formAction, isPending] =  useActionState(createTodo, initialState);
  const [isToastShown, setIsToastShown] = useState(false)

  //notifying user
  const notifySuccess =  () => toast.success('Task created successfully', {
    onClose: ()=>{router.push('/todos')}
  })
  const notifyError = ()=> toast.error('Error, while creating the task')


  useEffect(()=>{

    if(state.message==='success' && !isToastShown){

      //vider le formulaire après que la tache soit créée.
      formRef.current?.reset()
      notifySuccess()
      setIsToastShown(true)

    }else if(state.message === 'error' && !isToastShown){
      notifyError()
      setIsToastShown(true)
    }
    
  }, [state.message, router, isToastShown])

  

  return(
    <>
      
      <Toast />

      <form className="form" action={formAction} ref={formRef}>

        <div className="title">
          <h1>Create a task</h1>
        </div>

        <div className="align-horizontal">

          <div className="todo-container">
            <label className="placeholder">Task</label>
            <input 
              className="input"
              type="text"
              placeholder="Give a task"
              autoComplete="off"
              name="title"
              required
            />
          </div>

          <div className="date-container">
             <label className="placeholder">Date</label>
            <input 
              className="input"
              type="date"
              placeholder="Give a date"
              name="date"
              required 
            />        
          </div>

        </div>

        <div className="button-container">

          <Button />
          {/*<button  
            disabled = {isPending}
            type="submit" 
            className="btn-success"
            > Create</button>*/}
        </div>

      </form>
    </>
  )

}
export default CreateTodo