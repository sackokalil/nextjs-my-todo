'use client'

import { Todo } from "@/app/lib/definitions"
import Link from "next/link"
import { useActionState, useEffect, useRef, useState } from "react"
import { updateTodo } from "@/app/lib/actions"
import { useRouter } from "next/navigation"
import { Toast } from "@/app/ui/Toast"
import { toast } from "react-toastify"

export default function EditTodo({todo}:{todo: Todo}) {

    const {title, date, id} = todo

    const initialState = {
        message : ''
    }

    const [state, formAction, isPending] = useActionState(updateTodo, initialState)
    const [isToastShown, setIsToastShown] = useState(false)

    const router = useRouter()

    const formRef = useRef<HTMLFormElement>(null)

    const notifyUpdateSuccess = ()=> toast.success('The task updated successfully', {
        onClose : ()=>{router.push('/todos')}
    })
    const notifyUpdateError = ()=>toast.error('An Error occured during update')


    useEffect(()=>{

        if(state.message === 'success' && !isToastShown){
            formRef.current?.reset() //ceci n'a pas d'éffet, vue que les champs du form utilise defaultValue
            notifyUpdateSuccess()
            setIsToastShown(true)
        }else if(state.message === 'error' && ! isToastShown){
            notifyUpdateError()
            setIsToastShown(true)

        }

    }, [state.message, router, isToastShown, ])
    



    return (
        <>
            <Toast />

            <form className="form" action={formAction}  ref={formRef} >
                <input type="hidden" name="id" value={id} />
                <div className="title">
                    <h1>Edit the task</h1>
                </div>
                <div className="align-horizontal">
                    <div className="todo-container">
                        <label className="placeholder">Todo</label>
                        <input
                            type="text"

                            className="input"
                            placeholder="Give a task"
                            autoComplete="off"
                            defaultValue={title}
                            name="title"                       
                        />
                    </div>
                    <div className="date-container">
                        <label className="placeholder">Date</label>
                        <input
                            type="date"
                            defaultValue={date}
                            className="input"
                            placeholder="Give a date"
                            name="date"
                        />
                    </div>
                    
                </div>
                <div className="button-container">
                    <button disabled={isPending}  type="submit" className="btn-success">Edit</button>
                    <Link className="redirect-link" href="/todos">See my Task</Link>
                </div>
            </form>
        </>
    )
}
