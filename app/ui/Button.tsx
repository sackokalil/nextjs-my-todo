'use client'
 
import { useFormStatus } from 'react-dom'

export default function Button() {

  const {pending} = useFormStatus();


  return (
     <button  
        type="submit" 
        className="btn-success"
        aria-disabled={pending}
        disabled={pending}
      > Create</button>
  )
}
